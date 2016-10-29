import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material'

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

import { HeroesService } from '../heroes/services';

@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    MaterialModule.forRoot()
  ],
  declarations: [DashboardComponent],
  providers: [HeroesService]
})
export class DashboardModule { }
