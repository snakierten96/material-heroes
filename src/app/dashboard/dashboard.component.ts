import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mh-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle(['Dashboard','Tour of Heroes'].join(" :: "));
  }

  ngOnInit() {
  }

}
