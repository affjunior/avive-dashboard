import { Component } from '@angular/core';
import { CoreService } from '../../../../service/core.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  template: `
    <div class="branding">
        <a href="/">
          <img
            src="./assets/images/logo/avive-solutions-logo.png" 
            class="align-middle m-2 wi-100"
            alt="logo"
          />
        </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() { }
}
