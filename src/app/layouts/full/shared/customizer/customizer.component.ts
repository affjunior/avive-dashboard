import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { BrandingComponent } from '../../vertical/sidebar/branding.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from '../../../../shared/material.module';
import { AppSettings } from '../../../../interface/app-settings';
import { CoreService } from '../../../../service/core.service';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [BrandingComponent, TablerIconsModule, MaterialModule, FormsModule, NgScrollbarModule],
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomizerComponent {

  @Output() optionsChange = new EventEmitter<AppSettings>();
  constructor(private settings: CoreService) { }
  options = this.settings.getOptions();

  setDark() {
    this.optionsChange.emit(this.options);
  }

  setColor() {
    this.optionsChange.emit(this.options);
  }

  setDir() {
    this.optionsChange.emit(this.options);
  }

  setSidebar() {
    this.optionsChange.emit(this.options);
  }
}
