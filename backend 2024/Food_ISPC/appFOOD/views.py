from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.db import IntegrityError
from .models import Producto
from .serializers import ProductoSerializer
from rest_framework import status

# Create your views here.


# class ProductoViewSet(viewsets.ModelViewSet):
#     serializer_class = ProductoSerializer
#     queryset = Producto.objects.all()


class ProductoViewSet(APIView):

    @permission_classes([IsAuthenticated])
    def post(self, request):
        try:
            data = request.data
            serializer = ProductoSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Producto creado con éxito'}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({'detail': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get(self, request):
        try:
            productos = ProductoSerializer(Producto.objects.all(), many=True).data
            return Response(productos)
        except Exception:
            return Response({'detail': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductoByIdViewSet(APIView):

    def get(self, request, id_producto):
        try:
            try:
                producto = Producto.objects.get(id_producto=id_producto)
            except Producto.DoesNotExist:
                return Response({'detail': 'No existe un producto con ese Id.'}, status=status.HTTP_404_NOT_FOUND)
            result = ProductoSerializer(producto).data
            return Response(result)
        except Exception:
            return Response({'detail': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @permission_classes([IsAuthenticated])
    def put(self, request, id_producto):
        try:
            producto = Producto.objects.get(id_producto=id_producto)
        except Producto.DoesNotExist:
            return Response({'detail': 'No existe un producto con ese Id.'}, status=status.HTTP_404_NOT_FOUND)
        
        try:
            data = request.data
            serializer = ProductoSerializer(producto, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Producto actualizado con éxito'}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    @permission_classes([IsAuthenticated])
    def delete(self, request, id_producto):
        try:
            producto = Producto.objects.get(id_producto=id_producto)
        except Producto.DoesNotExist:
            return Response({'detail': 'No existe un producto con ese Id.'}, status=status.HTTP_404_NOT_FOUND)
        try:
            producto.delete()
            producto.save()
            return Response({'message': 'Producto eliminado con éxito'}, status=status.HTTP_200_OK)
        except IntegrityError as e:
            return Response({'detail': 'Foreign key constraint fails'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': Exception}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)