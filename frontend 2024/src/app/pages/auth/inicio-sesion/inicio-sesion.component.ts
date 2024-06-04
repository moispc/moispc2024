import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

// AuthService
// Router

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required], []],
      password: ['', [Validators.required, Validators.minLength(8)], []],
    });
  }
  get Password() {
    return this.form.get('password');
  }
  get Email() {
    return this.form.get('email');
  }



  onEnviar(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      // Llamar al servicio de autenticación
      this.authService.login(this.Email?.value, this.Password?.value).subscribe(success => {
        if (success) {
          // Redirigir al dashboard después de una autenticación exitosa
          this.router.navigate(['/home']);
        } else {
          // Mostrar un mensaje de error o manejar el fallo de autenticación
          console.error('Email o contraseña incorrectos');
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
