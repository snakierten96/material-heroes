import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material'

import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

import { HeroesSearchComponent } from '../heroes/components';


@NgModule({
  imports: [
    CommonModule,
    dashboardRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    HeroesSearchComponent
  ],
})
export class DashboardModule { }
