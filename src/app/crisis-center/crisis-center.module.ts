import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material'

import { crisisCenterRouting  } from './crisis-center.routing';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

import { CrisisService } from './crisis.service';
import { CrisisDialogComponent } from './crisis-dialog/crisis-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    crisisCenterRouting,
    MaterialModule.forRoot()
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisDialogComponent
  ],
  entryComponents: [
    CrisisDialogComponent
  ],
  providers: [CrisisService]
})
export class CrisisCenterModule { }
