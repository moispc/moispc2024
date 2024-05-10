import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosDevsComponent } from './pages/nosotros-devs/nosotros-devs.component';

import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, CarritoComponent, HomeComponent,NosotrosDevsComponent, HeaderComponent, NavComponent,DashboardComponent,CheckoutComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
