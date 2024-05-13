import { Component } from '@angular/core';
import { StatesComponent } from './states/states.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
}
