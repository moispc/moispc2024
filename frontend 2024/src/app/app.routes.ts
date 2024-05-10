import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"carrito", component:CarritoComponent}

];
