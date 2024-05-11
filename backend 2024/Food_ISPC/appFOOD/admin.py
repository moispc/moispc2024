from django.contrib import admin

from .models import CategoriaProducto
from .models import Producto
from .models import Pedido
from .models import Usuario
from .models import DetallePedido

# Register your models here.

class CategoriaProductoAdmin(admin.ModelAdmin):
    list_display = ( 'nombre_categoria', 'descripcion')

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ( 'telefono', 'nombre', 'apellido', 'isadmin', 'password' )

class PedidoAdmin(admin.ModelAdmin):
    list_display = ( 'id_pedidos', 'id_usuario', 'fecha_pedido', 'hora_pedido', 'total', 'direccion_entrega')

class ProductoAdmin(admin.ModelAdmin):
    list_display = ( 'nombre_producto', 'descripcion', 'precio', 'id_categoria')
    
class DetallePedidoAdmin(admin.ModelAdmin):
    list_display = ( 'id_pedido', 'id_producto', 'cantidad_productos', 'precio_producto', 'subtotal')




admin.site.register( CategoriaProducto, CategoriaProductoAdmin )
admin.site.register( Usuario, UsuarioAdmin )
admin.site.register( Pedido, PedidoAdmin )
admin.site.register( Producto, ProductoAdmin )
admin.site.register( DetallePedido, DetallePedidoAdmin )