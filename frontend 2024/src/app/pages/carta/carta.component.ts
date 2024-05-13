import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Producto } from '../../../model/producto.model';

const myModal = document.getElementById('myModal');
const myInput = document?.getElementById('myInput');

const fetchComentarios = async () => {
  const response = await fetch('assets/data/infoProducts.json');
  return await response.json();
};

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnInit {
  @Input() public producto: Producto;
  productos: any[] = [];

  constructor() {
    this.producto = {
      id: 0,
      title: '',
      image: {},
      price: 0,
      quantity: 1,
      total: 0,
    };
  }
  ngOnInit(): void {
    fetchComentarios().then((productos: any[]) => {
      this.productos = productos;
      console.log(this.productos);
    });
  }

  cargarModal(producto: Producto) {
    this.producto.title = producto.title;
    this.producto.image = producto.image;
    this.producto.price = producto.price;
   console.log(producto.quantity);
    this.producto.total = producto.price * producto.quantity;

    console.log(this.producto);
  }
}
