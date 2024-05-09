import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ExitoComponent } from './pages/exito/exito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarritoComponent, ExitoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
