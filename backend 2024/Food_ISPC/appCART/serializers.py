from rest_framework import serializers
from .models import Carrito, DetallePedido, Producto

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = ['id', 'producto', 'cantidad', 'usuario']

class DetallePedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetallePedido
        fields = ["cantidad_productos", "precio_producto", "subtotal"]

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["id_producto", "nombre_producto"]