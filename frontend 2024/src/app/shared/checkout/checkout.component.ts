import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido.model';



@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  paymentMethod: string = '';
  cardholderName: string = '';
  cardNumber: string = '';
  expiryMonth: string = '';
  expiryYear: string = '';
  cvv: string = '';

  pedido:Pedido=new Pedido(0,0,"","","",[]);
  constructor(private router: Router, private pedidoService: PedidosService) { }

  ngOnInit(): void {
    this.pedido=this.pedidoService.getPedido();
  }




  onSubmit() {
    if (this.paymentMethod === 'paypal') {
      console.log('Procesando pago con PayPal');

      setTimeout(() => {
        console.log('Pago con PayPal exitoso');

      }, 2000);
    } else if (this.paymentMethod === 'card') {
      console.log('Procesando pago con tarjeta de crédito');

      setTimeout(() => {
        console.log('Pago con tarjeta de crédito exitoso');

      }, 2000);
    } else {
      console.log('Selecciona un método de pago');
    }
    this.pedidoService.confirmarPedido().subscribe({
      next: () => {},
      error: (error) => {
        console.error(error);
      },
    });
    this.router.navigate(['/exito']);
  }

}


