import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CartaComponent } from './pages/carta/carta.component';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"carta", component:CartaComponent},
    {path:"carrito", component:CarritoComponent},
    {path:"pagar", component:CheckoutComponent},
    {path:"dashboard", component:DashboardComponent}
];
