import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent, CheckoutComponent],
  imports: [RouterOutlet, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
