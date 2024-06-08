import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Carrito } from '../../model/Carrito.model';
import { Router } from '@angular/router';
import { CartaComponent } from '../carta/carta.component';
CartaComponent;
Router;

import { CarritoService } from '../../services/carrito.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
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
    private carritoService: CarritoService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscription = this.carritoService.carritoVisible$.subscribe(
      (visible) => {
        this.isVisible = visible;
      }
    );
    if (localStorage.getItem('authToken') != null) {
      this.carritoService.actualizarCarrito$.subscribe(() => {
        this.cargarDetalle();
      });

      this.cargarDetalle();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sidebarVisible: boolean = false;

  cerrarSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
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
        this.toastr.error('Ocurrió un error inesperado.' + error);

        console.error(error);
      },
    });
  }

  irAPagar() {
    this.cerrarSidebar();
    this.router.navigate(['/pagar']);
  }

  eliminarDetalle(detalle: Carrito) {
    this.pedidoservice.deleteDetallePedido(detalle).subscribe({
      next: () => {
        this.toastr.success('Se eliminó el producto del carrito');
        this.cargarDetalle();
      },
      error: (error) => {
        this.toastr.error(error);
      },
    });
  }
}
