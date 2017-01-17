import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Option, Questions } from '../../providers/questions'
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private questions: Questions) {
  }

  nextQuestion(option) {
    this.questions.incrementState(option);
  }
}
