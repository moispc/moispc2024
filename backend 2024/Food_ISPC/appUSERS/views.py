from rest_framework import generics,authentication, permissions,status
from rest_framework.authtoken.views import ObtainAuthToken
from appUSERS.serializers import UsuarioSerializer, AuthTokenSerializer 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


# Create your views here.


class CreateUsuarioView(generics.CreateAPIView):
    serializer_class = UsuarioSerializer


class RetrieveUpdateUsuarioView(generics.RetrieveUpdateAPIView):
    serializer_class = UsuarioSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    

    def get_object(self):
        return self.request.user
    
class CreateTokenView(ObtainAuthToken):
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
       
        Token.objects.filter(user=user).delete()
        
       
        token, created = Token.objects.get_or_create(user=user)
        
        
        return Response({
            'email': user.email,
            'user_id': user.pk,
            'token': token.key,
            'nombre': user.nombre,
            'apellido': user.apellido,  
            'telefono': user.telefono,
            'admin': user.is_superuser
        }, status=status.HTTP_200_OK)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            token = Token.objects.get(user=request.user)
            token.delete()
            return Response({"detalle": "Logout Satisfactorio."}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({"detalle": "Token no encontrado."}, status=status.HTTP_400_BAD_REQUEST)    