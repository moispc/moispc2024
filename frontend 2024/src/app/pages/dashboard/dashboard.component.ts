import { Component, OnInit } from '@angular/core';
import { DashboardService, IPedido, IPedidosData } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
CommonModule
// import { StatesComponent } from './states/states.component';
// import { PedidosComponent } from './pedidos/pedidos.component';
// import { HistorialComponent } from './historial/historial.component';

// export interface IDetalle {
//   cantidad_productos: number;
//   precio_producto: number;
//   subtotal: number;
// }


// export interface IPedido {
//   fecha_pedido: string;
//   direccion_entrega: string;
//   estado: string;
//   detalles: IDetalle[];
// }

// export interface IPedidosData {
//   pendientes: IPedido[];
//   aprobados: IPedido[];
//   entregados: IPedido[];
// }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{

  pedidosData: IPedidosData = { pedidos: {pendientes: [], aprobados: [], entregados: []} };
  pedidosFiltrados: IPedido[] = [];
  activeTab: string = 'Pendientes';

  constructor(private dashboardService: DashboardService, private authService: AuthService, private toastr: ToastrService) {}


  ngOnInit(): void {
    this.dashboardService.obtenerPedidos().subscribe({
      next:(data: IPedidosData) => {

      this.pedidosData = data;
      this.setActiveTab(this.activeTab);
    }, error: (error) => {
      if (error.error.detail == 'Given token not valid for any token type') {
        this.toastr.info(
          'Su sesión a expirado. Debe iniciar sesión nuevamente'
        );
        this.authService.logout();
      }
    },
  });
}


  //filtro los pedidos
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    switch (tab) {
      case 'Pendientes':
        this.pedidosFiltrados = this.pedidosData.pedidos.pendientes;
        break;
      case 'Aprobados':
        this.pedidosFiltrados = this.pedidosData.pedidos.aprobados;
        break;
      case 'Entregados':
        this.pedidosFiltrados = this.pedidosData.pedidos.entregados;
        break;
      default:
        this.pedidosFiltrados = [];
    }

  }
}
