from rest_framework import serializers
from .models import Carrito, DetallePedido, Producto

class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = ['id', 'producto', 'cantidad', 'usuario']

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["nombre_producto"]

class DetallePedidoSerializer(serializers.ModelSerializer):
    producto = ProductosSerializer(source='id_producto', read_only=True)

    class Meta:
        model = DetallePedido
        fields = ["cantidad_productos", "precio_producto", "subtotal", "producto"]