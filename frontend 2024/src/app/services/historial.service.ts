import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private historialUrl = 'appCART/ver_dashboard'
  constructor(private http:HttpClient) {}

  getHistorial(): Observable<any[]> {
    return this.http.get<any[]>(this.historialUrl);
  }
}
