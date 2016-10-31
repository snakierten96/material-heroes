import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Hero } from '../hero';

@Injectable()
export class HeroesService {

  private heroesUrl: string = 'api/heroes';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor (private http: Http) { }

  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl, { headers: this.headers })
      .map((res: Response) => res.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero (id: number): Observable<Hero> {
    return this.getHeroes()
        .map(heroes => heroes.find(hero => hero.id === id));
  }

  update (hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers})
        .map(() => hero)
        .catch(this.handleError);
  }

  create (name: string): Observable<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name}),{ headers: this.headers })
      .map((res: Response) => res.json().data)
      .catch(this.handleError);
  }

  delete (id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
        .map(() => null)
        .catch(this.handleError);
  }

  private handleError (error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
