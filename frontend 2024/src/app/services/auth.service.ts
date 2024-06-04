import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/appUSERS/';
  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(email: string, password: string): Observable<boolean> {
    // Simula una llamada HTTP POST a tu API de autenticación
    return this.http.post<{ token: string, user_id: string }>(`${this.apiUrl}login/`, { email, password }).pipe(
      map(response => {
        // Guardar el token en localStorage o en algún lugar seguro
       
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('idUser', response.user_id);
        this.authStatusSubject.next(true); // Notifica el cambio de estado de autenticación
       
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
    localStorage.removeItem('idUser');
    this.authStatusSubject.next(false); // Notifica el cambio de estado de autenticación
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus$;
  }
}
