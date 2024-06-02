import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Producto } from '../../../app/model/producto.model';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { PedidosService } from '../../services/pedidos.service';
import { DetallePedido } from '../../model/detallePedido.model';
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
  productos: Producto[]=[];
  cantidadIngresada:number=1;
  subtotal:number=0;
  
  constructor(private productService: ProductsService, private pedidoService:PedidosService) {
    this.producto = {
      id_producto: 0,
      nombre_producto: '',
      imageURL: {},
      precio: 0,
      descripcion: '',
      stock:0,
      id_categoria:0
    };
    

    

     productService.getProducts().subscribe({
      next: (productos:Producto[]) => {
        this.productos = productos;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  ngOnInit(): void {
 
  }

  cargarModal(producto: Producto) {
    
    this.producto=producto;
    
    

    // this.producto.total = producto.precio;
  }

  calcularSubtotal(){
    this.subtotal=this.producto.precio*this.cantidadIngresada
  }

  addProducto(){
   const detallePedido = new DetallePedido(1,0, this.producto.id_producto, this.cantidadIngresada,'Gerónico 1257')
    this.pedidoService.agregarProducto(detallePedido).subscribe({
      next: () => {
        alert("Producto añadido correctamente");
      },
      error: (error) => {
        console.error(error);
      },
    });
    
  }
}
