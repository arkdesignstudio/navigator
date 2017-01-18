import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { DiscoverPage } from '../pages/discover/discover';
import { BuildsPage } from '../pages/builds/builds';
import { MapsPage } from '../pages/maps/maps';
import { TutorialsPage } from '../pages/tutorials/tutorials';

import { TabsPage } from '../pages/tabs/tabs';

import { Question } from '../providers/question';
import { Platforms } from '../providers/platforms';
import { Tutorials } from '../providers/tutorials';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    DiscoverPage,
    BuildsPage,
    MapsPage,
    TutorialsPage,
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
    TabsPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  Question,
  Platforms,
  Tutorials
  ]
})
export class AppModule {}
