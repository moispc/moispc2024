import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoVisible=new BehaviorSubject<boolean>(false);
  private actualizarCarritoSubject=new Subject<void>();
  actualizarCarrito$=this.actualizarCarritoSubject.asObservable();
  carritoVisible$=this.carritoVisible.asObservable();
  constructor() { }

  tiggerActualizarCarrito(){
    this.actualizarCarritoSubject.next();
  }

  triggerCerrarSidebar(visible:boolean){
    
    this.carritoVisible.next(visible);
  }

  cerrarCarrito(){
    this.carritoVisible.next(false);
  }
  mostrarCarrito(){
    this.carritoVisible.next(true);
  }
  toggleCarrito() {
    this.carritoVisible.next(!this.carritoVisible.value);
  }


}
