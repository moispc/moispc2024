import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

CommonModule
// import { StatesComponent } from './states/states.component';
// import { PedidosComponent } from './pedidos/pedidos.component';
// import { HistorialComponent } from './historial/historial.component';

export interface IDetalle {
  cantidad_productos: number;
  precio_producto: number;
  subtotal: number;
}

export interface IPedido {
  fecha_pedido: string;
  direccion_entrega: string;
  estado: string;
  detalles: IDetalle[];
}

export interface IPedidosData {
  pendientes: IPedido[];
  aprobados: IPedido[];
  entregados: IPedido[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{

  pedidosData: IPedidosData = { pendientes: [], aprobados: [], entregados: [] };
  pedidosFiltrados: IPedido[] = [];
  activeTab: string = 'Pendientes';

  constructor(private dashboardService: DashboardService) {}


  ngOnInit(): void {
    this.dashboardService.obtenerPedidos().subscribe((data: IPedidosData) => {
      console.log(data); // aca veo los datos! ver si funciona . .
      this.pedidosData = data;
      this.setActiveTab(this.activeTab);
    });
  }
  //filtro los pedidos
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    switch (tab) {
      case 'Pendientes':
        this.pedidosFiltrados = this.pedidosData.pendientes;
        break;
      case 'Aprobados':
        this.pedidosFiltrados = this.pedidosData.aprobados;
        break;
      case 'Entregados':
        this.pedidosFiltrados = this.pedidosData.entregados;
        break;
      default:
        this.pedidosFiltrados = [];
    }
  }
}
