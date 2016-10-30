import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Hero } from '../hero'

@Injectable()
export class HeroesSearchService {

  heroesSearchUrl: string = 'api/heroes/';

  constructor(private http: Http) { }

  search (term: string): Observable<Hero[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name',term);
    return this.http
        .get(this.heroesSearchUrl,{ search: params })
        .map((res: Response) => res.json().data as Hero[]);
  }

}
