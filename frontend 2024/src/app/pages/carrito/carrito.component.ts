import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Carrito } from '../../model/Carrito.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  detallePedido: Carrito[] = [];
  detallePedidoParcial: Carrito[] = [];

  constructor(private pedidoservice: PedidosService) {}

  ngOnInit(): void {
    this.pedidoservice.cerrarSidebar$.subscribe(()=>{
      this.cerrarSidebar();
    });
    this.pedidoservice.actualizarCarrito$.subscribe(()=>{
      this.cargarDetalle();
    })

    this.cargarDetalle();
  }

  sidebarVisible: boolean = false;

  cerrarSidebar() {
   
    this.sidebarVisible = !this.sidebarVisible;
  }

  public cargarDetalle() {
    this.pedidoservice.getDetallePedido().subscribe({
      next: (detalle: Carrito[]) => {
        this.detallePedido = detalle;
     
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  irAPagar()
  {
    alert("Se intenta pagar");
  }

  eliminarDetalle(detalle:Carrito){
   
    this.pedidoservice.deleteDetallePedido(detalle).subscribe({
      next: () => {
        
        this.cargarDetalle();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
