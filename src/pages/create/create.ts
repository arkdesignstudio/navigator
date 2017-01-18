import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question } from '../../providers/question'

import { MapsPage } from '../maps/maps';
/*
  Generated class for the Create page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private question: Question) {
  }

  nextQuestion(option) {

    var req = this.question.incrementState(option);
    if (req == "Maps") {
      this.navCtrl.push(MapsPage);
    }
  }
}
