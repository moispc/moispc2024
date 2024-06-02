from django.urls import path
from appUSERS import views

urlpatterns = [
    path('register/', views.CreateUsuarioView.as_view()),
    path('login/', views.CreateTokenView.as_view()),
    path('logout/', views.LogoutView.as_view())
]