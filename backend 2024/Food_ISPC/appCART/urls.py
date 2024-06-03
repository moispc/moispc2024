from django.urls import path
from .views import *

urlpatterns = [
    path('agregar/<int:producto_id>/', AgregarProductoAlCarrito.as_view()),
    path('ver/', VerCarrito.as_view()),
    path('confirmar/', ConfirmarPedido.as_view()),
    path('eliminar/<int:carrito_id>/', EliminarProductoDelCarrito.as_view()),
    path('ver_dashboard/', VerDashboard.as_view()),
]

