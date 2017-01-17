import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { DiscoverPage } from '../pages/discover/discover';
import { BuildsPage } from '../pages/builds/builds';
import { TabsPage } from '../pages/tabs/tabs';

import { Questions } from '../providers/questions';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    DiscoverPage,
    BuildsPage,
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
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Questions]
})
export class AppModule {}
