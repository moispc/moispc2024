from django.db import models
from appUSERS.models import Usuario

# Create your models here.

class CategoriaProducto(models.Model):
    id_categoria = models.AutoField(primary_key=True)  
    nombre_categoria = models.CharField(max_length=45)  
    descripcion = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'categoria_producto'
        verbose_name = 'Categoriaproducto'
        verbose_name_plural = 'Categoriaproductos'
    def __unicode__(self):
        return self.nombre_categoria
    def __str__(self):
        return self.nombre_categoria

    
class Pedido(models.Model):
    id_pedidos = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(Usuario, models.DO_NOTHING)
    fecha_pedido = models.DateField()  
    hora_pedido = models.IntegerField()  
    direccion_entrega = models.IntegerField()  

    class Meta:
        managed = True
        db_table = 'pedido'
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
    def __unicode__(self):
        return self.id_pedidos
    def __str__(self):
        return self.id_pedidos 

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)  
    nombre_producto = models.CharField(max_length=45)  
    descripcion = models.CharField(max_length=45)
    precio = models.FloatField()
    stock = models.IntegerField( 3, default = 0 )
    id_categoria = models.ForeignKey(CategoriaProducto, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    def __unicode__(self):
        return self.nombre_producto
    def __str__(self):
        return self.nombre_producto

class DetallePedido(models.Model):
    id_detalle = models.AutoField(primary_key=True)  
    id_pedido = models.ForeignKey('Pedido', models.DO_NOTHING)  
    id_producto = models.ForeignKey('Producto', models.DO_NOTHING)  
    cantidad_productos = models.IntegerField()  
    precio_producto = models.FloatField()  
    class Meta:
        managed = True
        db_table = 'detalle_pedido'
        verbose_name = 'Detallepedido'
        verbose_name_plural = 'Detallepedidos'
    def __unicode__(self):
        return self.id_detalle
    def __str__(self):
        return self.id_detalle
    