import { Injectable } from '@angular/core';

/*
  Generated class for the Platforms provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

interface Platform {
  name: string;
  icon: string;
}

@Injectable()
export class Platforms {

  public list: Platform[];

  constructor() {
    this.list = [];
  }

  addPlatform(name, icon) {
    let platform = {name: name, icon: icon};
    this.list.push(platform);
  }
}
