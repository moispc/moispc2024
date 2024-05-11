import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CartaComponent } from './pages/carta/carta.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"carta", component:CartaComponent},
    {path:"carrito", component:CarritoComponent},
    {path:"registro", component:RegistroComponent},


];
