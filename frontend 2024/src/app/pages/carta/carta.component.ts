import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgFor,CommonModule } from '@angular/common';


const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalInput = document.querySelector(".modal-input");
const modalTotal = document.querySelector(".modal-total");
const modalButton = document.querySelector(".confirm-button")
const selectedProduct = {
  id: "",
  name: "",
  image: {},
  price: 0,
  quantity: 0,
  total: 0
}

const fetchComentarios = async () => {
  const response = await fetch('assets/data/infoProducts.json'); 
  return await response.json();
};
@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})


export class CartaComponent implements OnInit {
  productos:any[]=[];
  ngOnInit(): void {
    fetchComentarios().then((productos: any[]) => {
      this.productos= productos;
     console.log(this.productos);
     for(let produc of this.productos) 
      {
      console.log(produc.image.imageURL);
    }
  });

}}

