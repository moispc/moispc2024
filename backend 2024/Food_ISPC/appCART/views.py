from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import DetallePedido, Pedido, Carrito
from appFOOD.models import Producto
from appUSERS.models import Usuario
from datetime import date, datetime
from asgiref.sync import sync_to_async

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

        
        
        # if not pedido:
            
        #     pedido.hora_pedido= current_time
        #     pedido.direccion_entrega="Cualquier Dire"
        #     pedido.estado="Pendiente"
        #     pedido.fecha_pedido = date.today()
        #     pedido.save()




        return Response({'message': 'Producto agregado al carrito'})

class VerCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        detalles_carrito = DetallePedido.objects.all()
        total_carrito = sum(detalle.subtotal 
                            for detalle in detalles_carrito)
        carrito_data = [{'producto': detalle.producto.nombre, 'cantidad': detalle.cantidad} 
                        for detalle in detalles_carrito]
        
        return Response({'carrito': carrito_data, 'total_carrito': total_carrito})

class ConfirmarPedido(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        detalles_carrito = DetallePedido.objects.all()
        total_carrito = sum(detalle.subtotal 
                            for detalle in detalles_carrito)
        for detalle in detalles_carrito:
            if detalle.cantidad > detalle.producto.stock:
                return Response({'error': 'Stock insuficiente'}, status=400)
            detalle.producto.stock -= detalle.cantidad
            detalle.producto.save()
        Pedido.objects.create(total=total_carrito)
        detalles_carrito.delete()
        return Response({'message': 'Pedido confirmado'})

class EliminarProductoDelCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, detalle_id):
        detalle = DetallePedido.objects.get(pk=detalle_id)
        producto = detalle.producto
        producto.stock += detalle.cantidad
        producto.save()
        detalle.delete()
        return Response({'message': 'Producto eliminado del carrito'})

class VaciarCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        detalles_carrito = DetallePedido.objects.all()
        for detalle in detalles_carrito:
            producto = detalle.producto
            producto.stock += detalle.cantidad
            producto.save()
        detalles_carrito.delete()
        return Response({'message': 'Carrito vaciado'})
