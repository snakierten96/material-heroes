import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { HeroesSearchService } from '../../services';
import { Hero } from '../../hero';

@Component({
  selector: 'mh-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.scss']
})
export class HeroesSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(
    private heroesSearchService: HeroesSearchService,
    private router: Router) { }

  // Put a search term into the observable stream
  search (term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit (): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term 
        ? this.heroesSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(err => {
        console.log(err);
        return Observable.of<Hero[]>([]);
      })
  }

}
