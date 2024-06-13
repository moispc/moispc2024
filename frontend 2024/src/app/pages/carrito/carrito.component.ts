import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Carrito } from '../../model/Carrito.model';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from '../../model/pedido.model';

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
    private pedidoService: PedidosService,
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
    this.pedidoService.getDetallePedido().subscribe({
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
    let nameUser: any = localStorage.getItem('nameUser')
    ? localStorage.getItem('nameUser')
    : 'Sin nombre';

  let pedido: Pedido = new Pedido(
    1,
    this.total,
    'Pedido realizado',
    'Gerónico 1257',
    nameUser,
    this.detallePedido
  );
  this.pedidoService.setPedido(pedido);
  this.cerrarSidebar();
  this.router.navigate(['/pagar']);
  }

  eliminarDetalle(detalle: Carrito) {
    this.pedidoService.deleteDetallePedido(detalle).subscribe({
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
