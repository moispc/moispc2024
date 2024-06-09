from rest_framework import generics,authentication, permissions,status
from appUSERS.serializers import UsuarioSerializer, AuthTokenSerializer 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken


class CreateUsuarioView(generics.CreateAPIView):
    serializer_class = UsuarioSerializer


class RetrieveUpdateUsuarioView(generics.RetrieveUpdateAPIView):
    serializer_class = UsuarioSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    

    def get_object(self):
        return self.request.user



class CreateTokenView(APIView):
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token

        return Response({
            'email': user.email,
            'user_id': user.pk, 
            'refresh': str(refresh),
            'access': str(access_token),
            'nombre': user.nombre, 
            'apellido': user.apellido,
            'telefono': user.telefono,
            'admin': user.is_superuser
        }, status=status.HTTP_200_OK)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):       
        try:           
            return Response({"detalle": "Logout Satisfactorio."}, status=status.HTTP_200_OK)
        except Exception as e:
            
            return Response({"detalle": "Error inesperado."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)