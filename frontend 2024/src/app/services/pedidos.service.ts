import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { DetallePedido } from '../model/detallePedido.model';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }

  getPedidos() {
    return this.http.get(this.url + '/pedidos');
  }

  public agregarProducto(product:DetallePedido):Observable<any> {
    return this.http.post(this.url + '/agregar/'+ product.idProducto, product);
  }

  // public updatePedido(product:Pedido):Observable<Pedido> {
  //   return this.http.put<Pedido>(this.url + '/products/' + product.id_producto, product);
  // }

  // public deleteProduct(product:Producto):Observable<Producto> {
  //   return this.http.delete<Producto>(this.url + '/products/' + product.id_producto);
  // }
}
