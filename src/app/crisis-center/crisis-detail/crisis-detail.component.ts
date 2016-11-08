import { Component, OnInit, HostBinding,
         trigger, transition,
         animate, style, state } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { Observable } from 'rxjs/Observable';

import { Crisis } from '../crisis.service';

@Component({
  selector: 'mh-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.forEach((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  cancel (): void {
    this.gotoCrises();
  }

  save (): void {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises (): void {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate (): boolean | Observable<boolean> {
    if ( !this.crisis || this.crisis.name === this.editName ) { return true; }
    // TODO: call dialog to handle confirmation
    console.log('Save changes?');
    return false;
  }

}
