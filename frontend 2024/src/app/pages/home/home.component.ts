import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';


const fetchComentarios = async () => {
  const response = await fetch('/src/data/comentarios.json'); 
  return await response.json();
};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  comentarios:any[]=[
    {
      "nombre": "Usuario1",
      "fecha": "2023-09-13",
      "calificacion": 5,
      "comentario": "'¡Las hamburguesas aquí son increíbles! Siempre vuelvo por la hamburguesa de queso cheddar, es la mejor que he probado.'"
    },
    {
      "nombre": "Usuario2",
      "fecha": "2023-09-12",
      "calificacion": 4,
      "comentario": "'Buena comida a un precio razonable. Las papas fritas son deliciosas y el tamaño de las hamburguesas está bueno.'"
    },
    {
      "nombre": "Usuario3",
      "fecha": "2023-09-10",
      "calificacion": 5,
      "comentario": "'¡Este lugar es genial! Las hamburguesas son muy ricas y el personal es amable.'"
    },
    {
      "nombre": "Usuario4",
      "fecha": "2023-09-08",
      "calificacion": 3,
      "comentario": "'Las hamburguesas son buenas. Tienen bastante variedad.'"
    },
    {
      "nombre": "Usuario5",
      "fecha": "2023-09-05",
      "calificacion": 5,
      "comentario": "'¡Me encanta porque están bien cocidas y la demora no es mucha'"
    }
]
;

  constructor() {}

  ngOnInit(): void {

    // fetchComentarios().then((comentarios: any[]) => {
    //   this.comentarios = comentarios;
    //   console.log(this.comentarios);
    // });
    
  }
  
}

// const obtenerDatos = async () => {
//   let respuesta = await fetch('src/data/comentarios.json');
//   let items = await respuesta.json();
//   return items;
// };



// const obtenerComentarios = async () => {
//   let items = await this.obtenerDatos();
//   this.cargarComentarios(items);
//   return items;
// };
