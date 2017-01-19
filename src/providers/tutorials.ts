import { Injectable } from '@angular/core';

/*
  Generated class for the Tutorials provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

interface Tutorial {
  title: string;
  icon: string;
  description: string;
  color: string;
}

interface IDictionary {
  [key: string]: Tutorial[];
}

@Injectable()
export class Tutorials {

  items: IDictionary;
  

  constructor() {
    this.items = {};
  }

  addTutorial(platforms: string[], tutorial) {

    for (let platform of platforms) {
       if (this.items[platform]) {
        this.items[platform].push(tutorial);
      }
      else {
        this.items[platform] = [];
        this.items[platform].push(tutorial);
      }
    }
  }

  getTutorials(platform) {
    if (this.items[platform]) {
      return this.items[platform];
    }
    else {
      // Error, no such platform
    }
    
  }
}
