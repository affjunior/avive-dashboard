import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  addEvent() {
    console.log('Add event');
  }

  btnCategoryClick(event: any) {
    console.log('Button category click');
  }
}
