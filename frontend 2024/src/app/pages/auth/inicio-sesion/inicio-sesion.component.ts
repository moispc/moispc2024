import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required], []],
      password: ['', [Validators.required, Validators.minLength(8)], []],
    });
  }
  get Password() {
    return this.form.get('password');
  }
  get Usuario() {
    return this.form.get('usuario');
  }



  onEnviar(event: Event) {
    console.log(this.form.value);

    event.preventDefault;

    if(this.form.valid){
      alert("Enviar al servidor . . .")
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}
