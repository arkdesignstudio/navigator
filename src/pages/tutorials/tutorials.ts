import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform } from 'ionic-angular';

import { TutorialPage } from '../tutorial/tutorial';

import { Tutorials } from '../../providers/tutorials';


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
  private tutorials : Tutorials;
  public items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.platform = this.navParams.data.platform;
    this.tutorials = new Tutorials;
    this.tutorials.addTutorial(
      [
        "Web",
      ], 
      {
        'title': 'Angular.js',
        'icon': 'logo-angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135',
      }
    );
    this.tutorials.addTutorial(
      [
        "Web",
      ],
      {
        'title': 'React',
        'icon': 'ios-snow',
        'description': 'React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags.',
        'color': '#60d9fa',
      }
    );
    this.tutorials.addTutorial(
      [
        "iOS",
      ],
      {
        'title': 'Swift',
        'icon': 'ios-appstore',
        'description': 'Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns. Swift is open source, and maintained by Apple.',
        'color': '#FF6600',
      }
    );
    this.tutorials.addTutorial(
      [
        "Android",
      ],
      {
        'title': 'Android SDK',
        'icon': 'logo-android',
        'description': 'A software development kit that enables developers to create applications for the Android platform. The Android SDK includes sample projects with source code, development tools, an emulator, and required libraries to build Android applications.',
        'color': '#a4c639',
      }
    );
    this.tutorials.addTutorial(
      [
        "iOS",
        "Android",
      ],
      {
        'title': 'Ionic 2',
        'icon': 'ios-ionic',
        'description': 'Ionic 2 is the next generation of Ionic, the open-source mobile app development SDK that makes it easy to build top quality native and progressive web apps with web technologies. Ionic 2 is based on the new 2.x version of Angular, and comes with many significant performance, usability, and feature improvements.',
        'color': '#2196F3',
      }
    );
    this.tutorials.addTutorial(
      [
        "iOS",
        "Android",
      ],
      {
        'title': 'React-Native',
        'icon': 'ios-snow',
        'description': 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere.',
        'color': '#60d9fa',
      }
    );
    this.tutorials.addTutorial(
      [
        "Language",
      ],
      {
        'title': 'Git',
        'icon': 'ios-git-branch',
        'description': 'Git (/ɡɪt/) is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for software development, but it can be used to keep track of changes in any files.',
        'color': '#fc6d26',
      }
    );
    this.tutorials.addTutorial(
      [
        "Language",
      ],
      {
        'title': 'JavaScript',
        'icon': 'logo-javascript',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439',
      }
    );

    this.items = this.tutorials.getTutorials(this.platform);
    // this.items = [
    //   {
    //     'title': 'Angular',
    //     'icon': 'logo-angular',
    //     'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
    //     'color': '#E63135'
    //   },
    //   {
    //     'title': 'CSS3',
    //     'icon': 'logo-css3',
    //     'description': 'The latest version of cascading stylesheets - the styling language of the web!',
    //     'color': '#0CA9EA'
    //   },
    //   {
    //     'title': 'HTML5',
    //     'icon': 'logo-html5',
    //     'description': 'The latest version of the web\'s markup language.',
    //     'color': '#F46529'
    //   },
    //   {
    //     'title': 'JavaScript',
    //     'icon': 'logo-javascript',
    //     'description': 'One of the most popular programming languages on the Web!',
    //     'color': '#FFD439'
    //   },
    //   {
    //     'title': 'Sass',
    //     'icon': 'logo-sass',
    //     'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
    //     'color': '#CE6296'
    //   },
    //   {
    //     'title': 'NodeJS',
    //     'icon': 'logo-nodejs',
    //     'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
    //     'color': '#78BD43'
    //   },
    //   {
    //     'title': 'Python',
    //     'icon': 'logo-python',
    //     'description': 'A clear and powerful object-oriented programming language!',
    //     'color': '#3575AC'
    //   },
    //   {
    //     'title': 'Ionic',
    //     'icon': 'ios-ionic',
    //     'description': '',
    //     'color': '#2196F3'
    //   },
    //   {
    //     'title': 'LAMP',
    //     'icon': 'logo-tux',
    //     'description': '',
    //     'color': '#000'
    //   },
    // ]
  }

  openModal(item) {
    let modal = this.modalCtrl.create(TutorialPage,{item: item});
    modal.present();
  }

}
