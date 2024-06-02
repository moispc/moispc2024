import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'; // Reemplazar con la URL de LA API

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    // Simula una llamada HTTP POST a tu API de autenticación
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        // Guardar el token en localStorage o en algún lugar seguro
        localStorage.setItem('authToken', response.token);
        return true;
      }),
      catchError(error => {
        console.error('Error en la autenticación', error);
        return of(false);
      })
    );
  }

  logout() {
    // Eliminar el token de autenticación
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    // Verificar si el email está autenticado
    return !!localStorage.getItem('authToken');
  }
}
