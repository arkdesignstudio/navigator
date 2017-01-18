import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { DiscoverPage } from '../pages/discover/discover';
import { BuildsPage } from '../pages/builds/builds';
import { MapsPage } from '../pages/maps/maps';

import { TutorialsPage, TutorialDetailsPage } from '../pages/tutorials/tutorials';

import { TabsPage } from '../pages/tabs/tabs';
import { Question } from '../providers/question';
import { Tutorials } from '../providers/tutorials';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    DiscoverPage,
    BuildsPage,
    MapsPage,
    TutorialsPage,
    TutorialDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePage,
    DiscoverPage,
    BuildsPage,
    MapsPage,
    TutorialsPage,
    TutorialDetailsPage,
    TabsPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  Question,
  Tutorials
  ]
})
export class AppModule {}
