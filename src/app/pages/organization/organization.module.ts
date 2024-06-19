import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { MaterialModule } from '../../shared/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrganizationComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule
  ]
})
export class OrganizationModule { }
