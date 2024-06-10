
from django.urls import path
from .views import ProductoViewSet, ProductoByIdViewSet

urlpatterns = [
    path('/', ProductoViewSet.as_view()),
    path('/<int:id_producto>', ProductoByIdViewSet.as_view())
]
