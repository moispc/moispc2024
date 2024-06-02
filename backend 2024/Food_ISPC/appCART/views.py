from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import DetallePedido, Pedido, Carrito
from appFOOD.models import Producto
from datetime import date, datetime
from .serializers import DetallePedidoSerializer
from asgiref.sync import sync_to_async
from appUSERS.models import Usuario

class AgregarProductoAlCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, producto_id):
        producto = Producto.objects.get(pk=producto_id)
        cantidad = int(request.data.get('cantidad'))
        id_usuario = int(request.data.get('id_usuario'))
        direccion = request.data.get('direccion')

        # usuario = Usuario.objects.get(pk=id_usuario)


        
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

        #detalles_carrito = Carrito.objects.filter(usuario_id=id_usuario)
        #carrito_data = [{'producto': detalle.producto.nombre_producto, 'cantidad': detalle.cantidad} for detalle in detalles_carrito]
        detalle_carrito = Producto.objects.prefetch_related("carrito_producto").all()

        return Response({'carrito': detalle_carrito})

class ConfirmarPedido(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        id_usuario = request.user.id
        direccion = request.data.get('direccion')

        detalles_carrito = Carrito.objects.filter(usuario_id=id_usuario)
        if not detalles_carrito.exists():
            return Response({'error': 'El carrito está vacío'}, status=400)
         
        
        for detalle in detalles_carrito:
            producto = detalle.producto
            if detalle.cantidad > producto.stock:
                return Response({'error': 'Stock insuficiente'}, status=400)
            producto.stock -= detalle.cantidad
            producto.save()

        detalles_carrito.delete()
        return Response({'message': 'Pedido confirmado'})

class EliminarProductoDelCarrito(APIView):
    permission_classes = [IsAuthenticated]
    

    def post(self, request, carrito_id):
        usuario = request.user
        id_usuario = request.user.id
        carrito_item = Carrito.objects.get(pk=carrito_id, usuario_id=id_usuario)
        producto = carrito_item.producto
        producto.stock += carrito_item.cantidad
        producto.save()
        carrito_item.delete()
        return Response({'message': 'Producto eliminado del carrito'})

class VerDashboard(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, id_usuario):
        # vistaPedidos = Pedido.objects.all()
        vistaPedidos = Pedido.objects.prefetch_related('detalles').all().filter(id_usuario_id=id_usuario)

        carrito_data = [
            {
                "fecha_pedido": pedido.fecha_pedido,
                "direccion_entrega": pedido.direccion_entrega,
                "estado":pedido.estado,
                "detalles": DetallePedidoSerializer(pedido.detalles.all(), many=True).data
                } 
                        for pedido in vistaPedidos]

        return Response( { "results": carrito_data} )
