# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group_id', 'permission_id'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type_id = models.IntegerField()
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type_id', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.IntegerField()
    group_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user_id', 'group_id'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.IntegerField()
    permission_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user_id', 'permission_id'),)


class Categoriaproductos(models.Model):
    idcategoria = models.IntegerField(db_column='idCategoria', primary_key=True)  # Field name made lowercase.
    nombrecategoria = models.CharField(db_column='nombreCategoria', max_length=45)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'categoriaproductos'


class DetallePedido(models.Model):
    iddetalle = models.IntegerField(db_column='idDetalle', primary_key=True)  # Field name made lowercase.
    idpedido = models.ForeignKey('Pedidos', models.DO_NOTHING, db_column='idPedido')  # Field name made lowercase.
    cantidadproductos = models.IntegerField(db_column='cantidadProductos')  # Field name made lowercase.
    precioproducto = models.FloatField(db_column='precioProducto')  # Field name made lowercase.
    subtotal = models.FloatField(db_column='subTotal')  # Field name made lowercase.
    idproducto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idProducto')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'detalle_pedido'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type_id = models.IntegerField(blank=True, null=True)
    user_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Pedidos(models.Model):
    idpedidos = models.IntegerField(db_column='idPedidos', primary_key=True)  # Field name made lowercase.
    idusuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idUsuario')  # Field name made lowercase.
    fechapedido = models.DateField(db_column='fechaPedido')  # Field name made lowercase.
    horapedido = models.IntegerField(db_column='horaPedido')  # Field name made lowercase.
    total = models.IntegerField()
    direccionentrega = models.IntegerField(db_column='DireccionEntrega')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pedidos'


class Producto(models.Model):
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)  # Field name made lowercase.
    nombreproducto = models.CharField(db_column='nombreProducto', max_length=45)  # Field name made lowercase.
    descripcion = models.CharField(max_length=45)
    precio = models.FloatField()
    idcategoria = models.ForeignKey(Categoriaproductos, models.DO_NOTHING, db_column='idCategoria')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'producto'


class Usuario(models.Model):
    idusuario = models.IntegerField(db_column='idUsuario', primary_key=True)  # Field name made lowercase.
    telefono = models.IntegerField()
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    isadmin = models.IntegerField(db_column='isAdmin')  # Field name made lowercase.
    contraseÒ_a = models.IntegerField(db_column='contrase├▒a')  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'usuario'
