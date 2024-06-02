import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string="http://127.0.0.1:8000/api";
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.url + '/producto');
  }

  public addProduct(product:Producto):Observable<Producto> {
    return this.http.post<Producto>(this.url + '/producto', product);
  }

  public updateProduct(product:Producto):Observable<Producto> {
    return this.http.put<Producto>(this.url + '/producto/' + product.id_producto, product);
  }

  public deleteProduct(product:Producto):Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/products/' + product.id_producto);
  }


  
}
