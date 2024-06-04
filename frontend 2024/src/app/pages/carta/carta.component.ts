import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Producto } from '../../../app/model/producto.model';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../../services/pedidos.service';
import { DetallePedido } from '../../model/detallePedido.model';
import { CarritoComponent } from '../carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, CarritoComponent],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  @Input() public producto: Producto;
  productos: Producto[] = [];
  cantidadIngresada: number = 1;
  subtotal: number = 0;

  constructor(
    productService: ProductsService,
    private pedidoService: PedidosService,
    private carritoService: CarritoService,
    private authService: AuthService,
    private router: Router
  ) {
    this.producto = {
      id_producto: 0,
      nombre_producto: '',
      imageURL: {},
      precio: 0,
      descripcion: '',
      stock: 0,
      id_categoria: 0,
    };

    productService.getProducts().subscribe({
      next: (productos: Producto[]) => {
        this.productos = productos;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  ngOnInit(): void {}

  cargarModal(producto: Producto) {
    if (this.estaLogueado()) {
      this.abrirModal();
      this.producto = producto;
      this.calcularSubtotal();
    } else {
      console.log('no está logueado');
      this.router.navigate(['/login']);
    }
  }

  estaLogueado() {
    return localStorage.getItem('authToken') != null ? true : false;
  }
  calcularSubtotal() {
    this.subtotal = this.producto.precio * this.cantidadIngresada;
  }

  addProducto() {
    const detallePedido = new DetallePedido(
      1,
      0,
      this.producto.id_producto,
      this.cantidadIngresada,
      'Gerónico 1257'
    );
    this.pedidoService.agregarProducto(detallePedido).subscribe({
      next: () => {
        this.carritoService.tiggerActualizarCarrito();
        this.toggleCarrito();
        this.cerrarModal();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  toggleCarrito() {
    this.carritoService.tiggerActualizarCarrito();
    this.carritoService.toggleCarrito();
  }

  cerrarModal() {
    const modalElement = document.getElementById('modalCompra');
    if (modalElement) {
      const modalInstance =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modalInstance.hide();
    }
  }

  abrirModal() {
    const modalElement = document.getElementById('modalCompra');
    if (modalElement) {
      const modalInstance =
        bootstrap.Modal.getInstance(modalElement) ||
        new bootstrap.Modal(modalElement);
      modalInstance.show();
    }
  }
}
