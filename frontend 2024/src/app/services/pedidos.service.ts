import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { DetallePedido } from '../model/detallePedido.model';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://127.0.0.1:8000/appCART/";
  
  constructor(private http:HttpClient) { }

  getPedidos() {
    return this.http.get(this.url + '/pedidos');
  }

  public agregarProducto(product:DetallePedido):Observable<any> {
    const headers=new HttpHeaders({
      //'Authorization': 'Token '+localStorage.getItem('token')
      'Authorization': 'Token '+'7cddf92f74d2168863f8fb33bc3e37c288e2bacd'
    })
   
    return this.http.post(this.url + 'agregar/'+ product.id_producto+'/',product ,{ headers} );
  }

  // public updatePedido(product:Pedido):Observable<Pedido> {
  //   return this.http.put<Pedido>(this.url + '/products/' + product.id_producto, product);
  // }

  // public deleteProduct(product:Producto):Observable<Producto> {
  //   return this.http.delete<Producto>(this.url + '/products/' + product.id_producto);
  // }
}
