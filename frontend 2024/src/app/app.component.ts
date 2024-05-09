import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD:frontend 2024/app/src/app/app.component.ts
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
=======
import { CarritoComponent } from './pages/carrito/carrito.component';
>>>>>>> 6f1f84b309b2a33973c5b648d5cc1c4e9a5efa18:frontend 2024/src/app/app.component.ts

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD:frontend 2024/app/src/app/app.component.ts
  imports: [CommonModule, RouterOutlet, DashboardComponent, CheckoutComponent],
=======
  imports: [RouterOutlet, CarritoComponent],
>>>>>>> 6f1f84b309b2a33973c5b648d5cc1c4e9a5efa18:frontend 2024/src/app/app.component.ts
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
