import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  estaAutenticado=false;

  constructor(private authservice:AuthService) {

  }
  ngOnInit(): void {
    this.authservice.isAuthenticated().subscribe({
      next:(respuesta) => {this.estaAutenticado = respuesta}
    })
  }

  logout() {
    this.authservice.logout();
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('idUser')
    // this.estaAutenticado = false;
  }

  // refreshPage() {
  //   window.location.reload();
  // }
}
