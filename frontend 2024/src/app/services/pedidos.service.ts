import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  getPedidos() {
    return this.http.get(this.url + '/pedidos');
  }

  public addProduct(product:Producto):Observable<Producto> {
    return this.http.post<Producto>(this.url + '/products', product);
  }

  public updateProduct(product:Producto):Observable<Producto> {
    return this.http.put<Producto>(this.url + '/products/' + product.id_producto, product);
  }

  public deleteProduct(product:Producto):Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/products/' + product.id_producto);
  }
}
