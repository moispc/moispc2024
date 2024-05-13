import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ExitoComponent } from './pages/exito/exito.component';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
import { NavComponent } from './shared/nav/nav.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    RouterOutlet,
    CarritoComponent,
    CommonModule,
    DashboardComponent,
    CheckoutComponent,
    HomeComponent,
    ExitoComponent,
    CartaComponent,
    RegistroComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ISPC Food';
}
