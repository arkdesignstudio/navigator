import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TutorialsPage } from '../../pages/tutorials/tutorials';

/*
  Generated class for the Maps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maps',
  //templateUrl: 'maps.html'
  template:`
<ion-header>

  <ion-navbar>
    <ion-title>Platform</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

  <ion-card *ngFor="let item of items" (click)="showTutorials(item)">
    <ion-item>
      <div class="center-icon">
        <div>
          <ion-icon name="{{ item.icon }}" [ngStyle]="{'color': item.color}" class="tutorial-icon"></ion-icon>
        </div>
      </div>
      <div class="center-icon">
         <h2 [ngStyle]="{'color': item.color}">{{ item.name }}</h2>
      </div>
      <p></p>
    </ion-item>
  </ion-card>
</ion-content>

`
})
export class MapsPage {
  private items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        'name': 'Web',
        'icon': 'ios-globe-outline',
        'description': '',
        'color': '#2196F3'
      },
      {
        'name': 'iOS',
        'icon': 'logo-apple',
        'description': '',
        'color': '#999999'
      },
      {
        'name': 'Android',
        'icon': 'logo-android',
        'description': '',
        'color': '#a4c639 '
      },
       {
        'name': 'Language',
        'icon': 'ios-code',
        'description': '',
        'color': '#F44336'
      },
    ];
  }

  showTutorials(item) {
    this.navCtrl.push(TutorialsPage, { platform: item.name });
  }
}
