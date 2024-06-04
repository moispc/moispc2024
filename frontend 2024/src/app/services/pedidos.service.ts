import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { DetallePedido } from '../model/detallePedido.model';
import { Carrito } from '../model/Carrito.model';
import { CarritoComponent } from '../pages/carrito/carrito.component';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url:string="http://localhost:8000/appCART/";

  // private cerrarSidebarSubject=new Subject<boolean>();
  // private actualizarCarritoSubject=new Subject<void>();
  // actualizarCarrito$=this.actualizarCarritoSubject.asObservable();
  // cerrarSidebar$=this.cerrarSidebarSubject.asObservable();
  
  constructor(private http:HttpClient) { }

  getPedidos() {
    return this.http.get(this.url + 'pedidos');
  }

  getDetallePedido():Observable <Carrito[]> {
    const headers=new HttpHeaders({
      'Authorization': 'Token '+localStorage.getItem('authToken')
    })
    return this.http.get<Carrito[]>(this.url + 'ver', {headers});
  }

  confirmarPedido():Observable<any>{
    const headers=new HttpHeaders({
      'Authorization': 'Token '+localStorage.getItem('authToken')
    })
    return this.http.post<any>(this.url + 'confirmar/', {headers});
  }

  deleteDetallePedido(detalle:Carrito):Observable<void>{
    const headers=new HttpHeaders({
      'Authorization': 'Token '+localStorage.getItem('authToken')
    })
    return this.http.delete<void>(this.url + 'eliminar/'+detalle.id, {headers})

  }

  public agregarProducto(product:DetallePedido):Observable<any> {
    const headers=new HttpHeaders({
      'Authorization': 'Token '+localStorage.getItem('authToken')
    })
   
    return this.http.post(this.url + 'agregar/'+ product.id_producto+'/',product ,{headers} );
  }

  // public updatePedido(product:Pedido):Observable<Pedido> {
  //   return this.http.put<Pedido>(this.url + '/products/' + product.id_producto, product);
  // }

  // public deleteProduct(product:Producto):Observable<Producto> {
  //   return this.http.delete<Producto>(this.url + '/products/' + product.id_producto);
  // }

  // tiggerActualizarCarrito(){
  //   this.actualizarCarritoSubject.next();
  // }

  // triggerCerrarSidebar(visible:boolean){
    
  //   this.cerrarSidebarSubject.next(visible);
  // }

}
