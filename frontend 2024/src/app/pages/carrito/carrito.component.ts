import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Carrito } from '../../model/detalleCarrito.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})

export class CarritoComponent implements OnInit {
  detallePedido:Carrito[] = [];

  constructor(private pedidoservice:PedidosService) {
  }

  ngOnInit(): void {
    this.cargarDetalle();
  }

  sidebarVisible: boolean = true;

  cerrarSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  cargarDetalle() {
      this.pedidoservice.getDetallePedido().subscribe({
        next: (detalle:Carrito[]) => {
          this.detallePedido = detalle;
          console.log("mje: ", detalle);
        },
        error: (error) => {
          console.error(error);
        },
      });
    };
}
