import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Tutorials page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html'
})
export class TutorialsPage {
  private platform: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.platform = this.navParams.get("platform");
  }
}
