import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../model/usuario.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent implements OnInit {
  usuario?: Usuario;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
          Validators.pattern(/^([0-9])*$/),
        ],
      ],
      mail: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
          ),
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
      console.log('Formulario válido');
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
  get Mail() {
    return this.form.get('mail');
  }
  get Usuario() {
    return this.form.get('usuario');
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
