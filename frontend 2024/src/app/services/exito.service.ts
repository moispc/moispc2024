import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { Pedido } from '../model/pedido.model';
import { Carrito } from '../model/Carrito.model';
import { DetallePedido } from '../model/detallePedido.model';



@Injectable({
  providedIn: 'root'
})
export class ExitosService {
  url:string="api/producto/";; // NO FUNCIONA

  constructor(private http: HttpClient) { }

  getFactura (): Observable <{usuario:Usuario, pedidos: Pedido[], carrito:Carrito, detallePedido: DetallePedido[]}> {
    return this.http.get <{usuario:Usuario, pedidos: Pedido[], carrito:Carrito, detallePedido: DetallePedido[]}>(`${this.url}`);
  }
}
