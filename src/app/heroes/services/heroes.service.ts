import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../hero';

@Injectable()
export class HeroesService {

  private heroesUrl: string = 'api/heroes';

  constructor (private http: Http) { }

  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then((res: Response) => res.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero (id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
