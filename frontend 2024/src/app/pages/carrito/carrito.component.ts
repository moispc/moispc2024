import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  productos = [
    { 
      nombre: 'Empanadas Árabes', 
      cantidad: 6, 
      precio: 10.99, 
      imagenUrl: './assets/carta/arabes_thumbnail.webp' 
    },
    { 
      nombre: 'Empanadas de J&Q', 
      cantidad: 4, 
      precio: 15.99, 
      imagenUrl: './assets/carta/j&q_thumbnail.webp' 
    }
  ];
}
