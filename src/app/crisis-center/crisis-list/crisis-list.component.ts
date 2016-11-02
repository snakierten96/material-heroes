import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, Params  } from '@angular/router';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material/dialog';

import { Crisis, CrisisService } from '../crisis.service';
import { CrisisDialogComponent } from '../crisis-dialog';

@Component({
  selector: 'mh-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[];
  selectedId: number;
  dialogRef: MdDialogRef<CrisisDialogComponent>;

  constructor(
    private service: CrisisService,
    private dialog: MdDialog,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private router: Router) { }

  isSelected (crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getCrises()
        .then(crises => this.crises = crises);
    });
  }

  onSelect (crisis: Crisis) {
    this.selectedId = crisis.id;
    this.router.navigate([crisis.id], { relativeTo: this.route })
  }

  openDialog (): void {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(CrisisDialogComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

}
