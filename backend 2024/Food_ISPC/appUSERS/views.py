from rest_framework import generics,authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from appUSERS.serializers import UsuarioSerializer, AuthTokenSerializer 
from appUSERS.models import Usuario


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


'''class ListUsuarioView(generics.ListAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()'''
