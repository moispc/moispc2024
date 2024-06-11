import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../../../services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {
  dashbord: any[];
  constructor(private historialService: HistorialService) {}
  ngOnInit(): void {
    this.historialService.getHistorial().subscribe(data => {
      this.dashbord = data;
    });
  }
}