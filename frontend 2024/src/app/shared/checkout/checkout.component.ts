import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
Router

NgModel


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  paymentMethod: string = '';
  cardholderName: string = '';
  cardNumber: string = '';
  expiryMonth: string = '';
  expiryYear: string = '';
  cvv: string = '';

  constructor(private router: Router, private pedidoService: PedidosService) { }




  onSubmit() {
    if (this.paymentMethod === 'paypal') {
      console.log('Procesando pago con PayPal');
      // Simular el procesamiento del pago con PayPal
      setTimeout(() => {
        console.log('Pago con PayPal exitoso');
        // Aquí podrías redirigir a una página de confirmación
      }, 2000); // Simula un tiempo de procesamiento de 2 segundos
    } else if (this.paymentMethod === 'card') {
      console.log('Procesando pago con tarjeta de crédito');
      // Simular el procesamiento del pago con tarjeta de crédito
      setTimeout(() => {
        console.log('Pago con tarjeta de crédito exitoso');
        // Aquí podrías redirigir a una página de confirmación
      }, 2000); // Simula un tiempo de procesamiento de 2 segundos
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


