import { Component } from '@angular/core';
import { StatesComponent } from './states/states.component';
import {faPen,faPlus,faMoneyBill,faUsers,faClock,faBriefcase,} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
edit = faPen;
  create = faPlus;
  budget = faMoneyBill;
  project = faUsers;
  time = faClock;
  work = faBriefcase;
}
