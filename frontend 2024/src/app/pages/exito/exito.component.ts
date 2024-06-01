import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exito',
  standalone: true,
  imports: [],
  templateUrl: './exito.component.html',
  styleUrl: './exito.component.css'
})
export class ExitoComponent implements OnInit {
  contador=30;
constructor(private router:Router){}
 printDiv() {
    window.print();
    
    window.location.href = './home';
}
ngOnInit(): void {
  this.startCountdown();
}

startCountdown(){
  const contdownInterval=setInterval(() => {this.contador--;
    if(this.contador==0){
      clearInterval(contdownInterval);
      this.router.navigate(['/']);
    }
  },1000);
    
}
}
