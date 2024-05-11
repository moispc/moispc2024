from django.db import models

# Create your models here.

class CategoriaProducto(models.Model):
    id_categoria = models.AutoField(primary_key=True)  # Field name made lowercase.
    nombre_categoria = models.CharField(max_length=45)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45)

    class Meta:
        db_table = 'categoria_producto'
        verbose_name = 'Categoriaproducto'
        verbose_name_plural = 'Categoriaproductos'
    def __unicode__(self):
        return self.nombre_categoria
    def __str__(self):
        return self.nombre_categoria

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=45)  # Field name made lowercase.
    apellido = models.CharField(max_length=45)
    telefono = models.CharField(max_length=13)
    isadmin = models.BooleanField()  # Field name made lowercase.
    password = models.CharField(max_length=45)

    class Meta:
        db_table = 'usuario'
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Pedido(models.Model):
    id_pedidos = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(Usuario, models.DO_NOTHING)
    fecha_pedido = models.DateField()  # Field name made lowercase.
    hora_pedido = models.IntegerField()  # Field name made lowercase.
    total = models.IntegerField()
    direccion_entrega = models.IntegerField()  # Field name made lowercase.

    class Meta:
        db_table = 'pedido'
        verbose_name = 'Pedido'
        verbose_name_plural = 'Pedidos'
    def __unicode__(self):
        return self.id_pedidos
    def __str__(self):
        return self.id_pedidos 

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)  # Field name made lowercase.
    nombre_producto = models.CharField(max_length=45)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45)
    precio = models.FloatField()
    id_categoria = models.ForeignKey(CategoriaProducto, models.DO_NOTHING)  # Field name made lowercase.

    class Meta:
        # managed = False
        db_table = 'producto'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
    def __unicode__(self):
        return self.nombre_producto
    def __str__(self):
        return self.nombre_producto

class DetallePedido(models.Model):
    id_detalle = models.AutoField(primary_key=True)  # Field name made lowercase.
    id_pedido = models.ForeignKey('Pedido', models.DO_NOTHING)  # Field name made lowercase.
    id_producto = models.ForeignKey('Producto', models.DO_NOTHING)  # Field name made lowercase.
    cantidad_productos = models.IntegerField()  # Field name made lowercase.
    precio_producto = models.FloatField()  # Field name made lowercase.
    subtotal = models.FloatField()  # Field name made lowercase.

    class Meta:
        # managed = False
        db_table = 'detalle_pedido'
        verbose_name = 'Detallepedido'
        verbose_name_plural = 'Detallepedidos'
    def __unicode__(self):
        return self.id_detalle
    def __str__(self):
        return self.id_detalle
    