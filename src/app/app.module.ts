import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { DiscoverPage } from '../pages/discover/discover';
import { BuildsPage } from '../pages/builds/builds';
import { MapsPage } from '../pages/maps/maps';

import { TutorialsPage } from '../pages/tutorials/tutorials';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { TabsPage } from '../pages/tabs/tabs';
import { Question } from '../providers/question';
import { Tutorials } from '../providers/tutorials';
import { Tutorial } from '../providers/tutorial';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    DiscoverPage,
    BuildsPage,
    MapsPage,
    TutorialsPage,
    TutorialPage,
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
    TutorialPage,
    TabsPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  Question,
  Tutorials,
  Tutorial,
  ]
})
export class AppModule {}
