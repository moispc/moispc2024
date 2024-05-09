import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ExitoComponent } from './pages/exito/exito.component';
import { HomeComponent } from './pages/home/home.component';
import { CartaComponent } from './pages/carta/carta.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarritoComponent, ExitoComponent, HomeComponent,CartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
