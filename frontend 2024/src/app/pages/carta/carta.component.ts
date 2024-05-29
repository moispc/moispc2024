import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Producto } from '../../../app/model/producto.model';
import { ProductsService } from '../../services/products.service';

const myModal = document.getElementById('myModal');
const myInput = document?.getElementById('myInput');

// const fetchComentarios = async () => {
//   const response = await fetch('assets/data/infoProducts.json');
//   return await response.json();
// };

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  @Input() public producto: Producto;
  productos: any;
  
  constructor(productService: ProductsService) {
    this.producto = {
      id_producto: 0,
      nombre_producto: '',
      image: {},
      precio: 0,
      descripcion:''
      
    };

    this.productos = productService.getProducts().subscribe({
      next:(productos)=>{
        this.productos=productos;
      },
      error:(error)=>{
        console.error(error);
      }}
    );




  }
  ngOnInit(): void {
    // fetchComentarios().then((productos: any[]) => {
    //   this.productos = productos;
    //   console.log(this.productos);
    // });
  }

  cargarModal(producto: Producto) {
    this.producto.nombre_producto = producto.nombre_producto;
    this.producto.image = producto.image;
    this.producto.precio = producto.precio;
   
    //this.producto.total = producto.price * producto.quantity;

   
  }

}
