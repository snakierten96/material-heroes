import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteriod Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

@Injectable()
export class CrisisService {

  static nextCrisisId = 100;

  getCrises (): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

  getCrisis (id: number | string): Promise<Crisis> {
    return this.getCrises()
      .then(crises => crises.find(crisis => crisis.id === +id));
  }

}
