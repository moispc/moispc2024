import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from './components/pages/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
