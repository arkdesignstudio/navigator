import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform } from 'ionic-angular';



/*
  Generated class for the Tutorials page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutorials',
  // templateUrl: 'tutorials.html'
  template:`
<ion-header>

  <ion-navbar>
    <ion-title>{{ platform }} Tutorials</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

  <ion-list>

    <ion-item *ngFor="let item of items" (click)="openModal(item)" icon-left>
      <ion-icon [name]="item.icon" [ngStyle]="{'color': item.color}" item-left>
      </ion-icon>
      <h2>{{ item.title }}</h2>
    </ion-item>
  </ion-list>
</ion-content>
`
})
export class TutorialsPage {
  private platform: string;
  private items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.platform = this.navParams.data.platform;
    this.items = [
      {
        'title': 'Angular',
        'icon': 'logo-angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'logo-css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'HTML5',
        'icon': 'logo-html5',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'JavaScript',
        'icon': 'logo-javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Sass',
        'icon': 'logo-sass',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'NodeJS',
        'icon': 'logo-nodejs',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Python',
        'icon': 'logo-python',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Ionic',
        'icon': 'ios-ionic',
        'description': '',
        'color': '#2196F3'
      },
      {
        'title': 'LAMP',
        'icon': 'logo-tux',
        'description': '',
        'color': '#000'
      },
    ]
  }

  openModal(item) {
    let modal = this.modalCtrl.create(TutorialDetailsPage,{item: item});
    modal.present();
  }

}

@Component({
  selector: 'page-tutorials',
  template:`
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
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
      <button ion-button outline>Begin Tutorial</button>

    </ion-slide>
  </ion-slides>
    
</ion-content>

`
})
export class TutorialDetailsPage {
  item;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
      this.item = this.params.data.item; 
    }

  dismiss() {
    this.viewCtrl.dismiss();

  }
}
