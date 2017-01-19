import { Component, ViewChild } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform, Slides } from 'ionic-angular';

import { Tutorial } from '../../providers/tutorial';
/*
  Generated class for the Tutorial page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorial',
  template:`
<ion-header>
  <ion-toolbar>
    <ion-title>
      Tutorial for {{ item.title }}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>


<ion-content padding>
  <ion-slides pager>
    <ion-slide>
      <div class='big-icon'>
        <ion-icon [name]="item.icon" [ngStyle]="{'color': item.color}">
        </ion-icon>
      </div>
      <h2>{{item.title}}</h2>
      <p>{{item.description}}</p>
      <button ion-button outline (click)="nextSlide()">Begin Tutorial</button>
    </ion-slide>

    <ion-slide>
      <h3>First-timer?</h3>
      <div class='big-icon'>
        <ion-icon name='ios-ionitron'></ion-icon>
      </div>
      <button ion-button primary (click)="beginTutorial(false)">Begin Setup Tutorial</button>
      <button ion-button outline (click)="beginTutorial(true)">Skip</button>
    </ion-slide>

    <ion-slide>
      <div>
        <h3>Introduction slide</h3>
      </div>
      <button ion-button outline (click)="prevSlide()">Back</button>
      <button ion-button primary (click)="nextSlide()">Next</button>
    </ion-slide>

    <ion-slide *ngFor="let slide of tutorial.slides">
      <div>
        {{ slide.title }}
      </div>
      <button ion-button outline (click)="prevSlide()">Back</button>
      <button ion-button primary (click)="nextSlide()">Next</button>
    </ion-slide>

  </ion-slides>
    
</ion-content>

`
})
export class TutorialPage {
  item;
  tutorial: Tutorial;
  @ViewChild(Slides) slides: Slides;
  
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
      this.item = this.params.data.item;
      this.tutorial = new Tutorial;
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  nextSlide() {
    this.slides.slideNext(250);
  }

  prevSlide() {
    this.slides.slidePrev(250);
  }

  beginTutorial(skipSetup) {

    if (this.tutorial.slides) {
      this.tutorial.reset();
    }
    this.tutorial.addSlides(skipSetup);
    this.nextSlide();
  }
}
