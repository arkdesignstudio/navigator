import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TutorialsPage } from '../../pages/tutorials/tutorials';

import { Platforms } from '../../providers/platforms';

/*
  Generated class for the Maps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private platforms: Platforms) {
    this.platforms.addPlatform("Web", "ios-globe-outline");
    this.platforms.addPlatform("iOS", "logo-apple");
    this.platforms.addPlatform("Android", "logo-android");
  }

  showTutorials(platform) {
    this.navCtrl.push(TutorialsPage, { platform: platform.name });
  }
}
