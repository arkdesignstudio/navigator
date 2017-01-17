import { Injectable } from '@angular/core';
import { IDictionary, Option } from './question';

/*
  Generated class for the Setup provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Setup {
  private choices: IDictionary;

  constructor(choices) {
    this.choices = choices;
    console.log(this.choices);
  }


}
