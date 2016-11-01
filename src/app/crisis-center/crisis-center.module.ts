import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material'

import { crisisCenterRouting  } from './crisis-center.routing';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    crisisCenterRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule { }
