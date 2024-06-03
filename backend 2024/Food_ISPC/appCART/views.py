from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import DetallePedido, Pedido, Carrito
from appFOOD.models import Producto
from datetime import date, datetime
from .serializers import DetallePedidoSerializer
from asgiref.sync import sync_to_async
from appUSERS.models import Usuario
from rest_framework import status

class AgregarProductoAlCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, producto_id):

        producto = Producto.objects.get(pk=producto_id)
        cantidad = int(request.data.get('cantidad'))
        id_usuario = request.user.id_usuario
        direccion = request.data.get('direccion')
        
        if cantidad > producto.stock:
            return Response({'error': 'Stock insuficiente'}, status=400)

        current_time = datetime.now().time()
        pedido, created  = Pedido.objects.get_or_create(id_usuario_id=id_usuario, estado="Pendiente")

        if created:
            pedido.hora_pedido= current_time
            pedido.direccion_entrega=direccion
            pedido.fecha_pedido = date.today()
            pedido.save()

        carrito, carritoCreated = Carrito.objects.get_or_create(producto_id=producto.id_producto, usuario_id=id_usuario, id_pedido_id=pedido.id_pedidos)
        if carritoCreated:
            carrito.cantidad = cantidad
            carrito.save()
        else:
            carrito.cantidad += cantidad
            carrito.save()

        detallePedido, detalleCreated = DetallePedido.objects.get_or_create( precio_producto=producto.precio, id_pedido_id=pedido.id_pedidos, id_producto_id= producto.id_producto)

        if detalleCreated:
            detallePedido.cantidad_productos = cantidad
            detallePedido.subtotal = detallePedido.cantidad_productos * detallePedido.precio_producto
            detallePedido.save()
        else:
            detallePedido.cantidad_productos += cantidad
            detallePedido.subtotal = detallePedido.cantidad_productos * detallePedido.precio_producto
            detallePedido.save()

        producto.stock -= cantidad
        producto.save()
        return Response({'message': 'Producto agregado al carrito'})

class VerCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuario = request.user
        id_usuario = usuario.id_usuario

        detalles_carrito = Carrito.objects.select_related("id_pedido").all().filter(usuario_id=id_usuario)
        carrito_data = [
            {
                "id": detalle.id,
                'producto': detalle.producto.nombre_producto,
                'cantidad': detalle.cantidad,
                "precio": detalle.producto.precio,
                "imageURL": detalle.producto.imageURL
            } for detalle in detalles_carrito]

        return Response(carrito_data)

class ConfirmarPedido(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            usuario = request.user
            id_usuario = usuario.id_usuario

            detalles_carrito = Carrito.objects.filter(usuario_id=id_usuario)
            pedido  = Pedido.objects.get(id_usuario_id=id_usuario, estado="Pendiente")
            # if not detalles_carrito.exists():
            #     return Response({'error': 'El carrito está vacío'}, status=400)   

            detalles_carrito.delete()
            pedido.estado = "Aprobado por Chayanne"
            pedido.save()
            return Response({'message': 'Pedido confirmado'})
        except Carrito.DoesNotExist:
            return Response({"error": "El carrito está vacio."}, status=status.HTTP_404_NOT_FOUND)
        except Pedido.DoesNotExist:
            return Response({"error": "El carrito está vacio."}, status=status.HTTP_404_NOT_FOUND)

class EliminarProductoDelCarrito(APIView):
    permission_classes = [IsAuthenticated]
    
    def delete(self, request, carrito_id):

        try:

            carrito_item = Carrito.objects.get(pk=carrito_id)

            detalle_item = DetallePedido.objects.get(id_producto_id=carrito_item.producto.id_producto, id_pedido_id = carrito_item.id_pedido)

            producto = carrito_item.producto
            producto.stock += carrito_item.cantidad
            producto.save()
            carrito_item.delete()
            detalle_item.delete()
            return Response({'message': 'Producto eliminado del carrito'})
        except Carrito.DoesNotExist:
            return Response({"error": "No existe un producto en el carrito con ese id de carrito."}, status=status.HTTP_404_NOT_FOUND)

class VerDashboard(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        usuario = request.user
        id_usuario = usuario.id_usuario
        vistaPedidos = Pedido.objects.prefetch_related('detalles').all().filter(id_usuario_id=id_usuario)
        print("holo")

        carrito_data = [
            {
                "fecha_pedido": pedido.fecha_pedido,
                "direccion_entrega": pedido.direccion_entrega,
                "estado":pedido.estado,
                "detalles": DetallePedidoSerializer(pedido.detalles.all(), many=True).data
                } 
                        for pedido in vistaPedidos]

        return Response( { "results": carrito_data} )
