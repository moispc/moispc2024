import { Component } from '@angular/core';

@Component({
  selector: 'app-exito',
  standalone: true,
  imports: [],
  templateUrl: './exito.component.html',
  styleUrl: './exito.component.css'
})
export class ExitoComponent {

 printDiv() {
    window.print();
    
    window.location.href = './home';
}

}
