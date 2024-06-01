from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import DetallePedido, Pedido
from appFOOD.models import Producto

class AgregarProductoAlCarrito(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, producto_id):
        producto = Producto.objects.get(pk=producto_id)
        cantidad = int(request.data.get('cantidad'))
        if cantidad > producto.stock:
            return Response({'error': 'Stock insuficiente'}, status=400)

        detalle_pedido, created = DetallePedido.objects.get_or_create(producto=producto, defaults=
                                                        {'cantidad': cantidad, 'subtotal': producto.precio * cantidad})
        if not created:
            detalle_pedido.cantidad += cantidad
            detalle_pedido.subtotal += producto.precio * cantidad
            detalle_pedido.save()
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
