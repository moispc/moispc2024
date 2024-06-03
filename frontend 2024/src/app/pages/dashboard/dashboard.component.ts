import { Component } from '@angular/core';
import { StatesComponent } from './states/states.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HistorialComponent } from './historial/historial.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatesComponent, PedidosComponent, HistorialComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent{}
