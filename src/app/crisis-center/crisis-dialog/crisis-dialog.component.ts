import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mh-crisis-dialog',
  templateUrl: './crisis-dialog.component.html',
  styleUrls: ['./crisis-dialog.component.scss']
})
export class CrisisDialogComponent {

  constructor(private dialogRef: MdDialogRef<CrisisDialogComponent>) { }

}
