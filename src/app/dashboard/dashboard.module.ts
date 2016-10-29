import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material'

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    MaterialModule.forRoot()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
