import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Producto } from '../../../app/model/producto.model';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
const myModal = document.getElementById('myModal');
const myInput = document?.getElementById('myInput');

// const fetchComentarios = async () => {
//   const response = await fetch('assets/data/infoProducts.json');
//   return await response.json();
// };

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  @Input() public producto: Producto;
  productos: any;
  cantidadIngresada:number=1;
  subtotal:number=0;
  constructor(productService: ProductsService) {
    this.producto = {
      id_producto: 0,
      nombre_producto: '',
      imageURL: {},
      precio: 0,
      descripcion: '',
    };
    

    

    this.productos = productService.getProducts().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  ngOnInit(): void {
    // fetchComentarios().then((productos: any[]) => {
    //   this.productos = productos;
    //   console.log(this.productos);
    // });
  }

  cargarModal(producto: Producto) {
    this.producto.nombre_producto = producto.nombre_producto;
    this.producto.imageURL = producto.imageURL;
    this.producto.precio = producto.precio;
   this.subtotal=producto.precio;
    

    // this.producto.total = producto.precio;
  }

  calcularSubtotal(){
    this.subtotal=this.producto.precio*this.cantidadIngresada
  }
}
