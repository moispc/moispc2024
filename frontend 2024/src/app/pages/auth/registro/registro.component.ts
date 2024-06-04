import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../app/model/usuario.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(12),
          Validators.pattern(/^([0-9])*$/),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          
          
        ],
      ],
      checkPassword: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.form.reset();
  }
  onEnviar(event: Event): void {
    event.preventDefault;
    if (this.form.valid) {
      
      this.usuario = this.form.value;
      console.log(this.usuario);
      this.userService.addUser(this.usuario).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['exitoNuevo']);
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
      console.log('error en formulario');
    }
  }
  registrar() {
    console.log('entro aca');
  }

  get Password() {
    return this.form.get('password');
  }
  get Email() {
    return this.form.get('email');
  }
  get Apellido() {
    return this.form.get('apellido');
  }
  get Telefono() {
    return this.form.get('telefono');
  }
  get Nombre() {
    return this.form.get('nombre');
  }
  get CheckPassword() {
    return this.form.get('checkPassword');
  }
}
