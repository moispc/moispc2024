from django.urls import path
from appUSERS import views

urlpatterns = [
    path('register/', views.CreateUsuarioView.as_view()),
    path('token/', views.CreateTokenView.as_view()),
    path('login/', views.RetrieveUpdateUsuarioView.as_view())
]