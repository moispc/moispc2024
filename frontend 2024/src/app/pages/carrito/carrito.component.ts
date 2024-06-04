import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Carrito } from '../../model/Carrito.model';
import { CarritoService } from '../../services/carrito.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit, OnDestroy {
  detallePedido: Carrito[] = [];
  detallePedidoParcial: Carrito[] = [];
  total: number = 0;
  subscription: Subscription = new Subscription();

  isVisible: boolean = false;
  constructor(
    private pedidoservice: PedidosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.subscription = this.carritoService.carritoVisible$.subscribe(
      (visible) => {
        this.isVisible = visible;
      }
    );
    this.carritoService.actualizarCarrito$.subscribe(() => {
      this.cargarDetalle();
    });

    this.cargarDetalle();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  

  cerrarSidebar() {
    this.carritoService.toggleCarrito();
  }

  public cargarDetalle() {
    this.pedidoservice.getDetallePedido().subscribe({
      next: (detalle: Carrito[]) => {
        this.total = 0;
        this.detallePedido = detalle;
        for (let det of detalle) {
          this.total += det.precio * det.cantidad;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  irAPagar() {
    this.cargarDetalle();
    this.pedidoservice.confirmarPedido().subscribe({
      next: (response) => {
        
        console.log("Pedido a sido confirmado satisfactoriamente")
      },
      error: (error) => {
        console.error(error);
      },
    });
    
  }

  eliminarDetalle(detalle: Carrito) {
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
