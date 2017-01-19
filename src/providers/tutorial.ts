import { Injectable } from '@angular/core';


/*
  Generated class for the Tutorial provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Tutorial {
  slides;

  constructor() {
    this.slides = [];
  }

  reset() {
    this.slides = [];
  }

  addSlide(title) {
    this.slides.push({
      'title': title,
    });
  }

  addSlides(skip) {
    if (skip) {
      this.slides.push({
        'title': "Skipping setup tutorial"
      });
      this.slides.push({
        'title': "Step 1"
      });
      this.slides.push({
        'title': "Step 2"
      });
      this.slides.push({
        'title': "Step 3"
      });
    }
    else {
      this.slides.push({
        'title': "Setup tutorial"
      });
      this.slides.push({
        'title': "Step 1"
      });
      this.slides.push({
        'title': "Step 2"
      });
      this.slides.push({
        'title': "Step 3"
      });
    }
  }
}
