import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  navigateToOrganization() {
    this.router.navigate(['/organization']); // Step 3: Use navigate method
  }

  btnCategoryClick(event: any) {
    console.log('Button category click');
  }
}
