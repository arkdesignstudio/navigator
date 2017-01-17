import { Component } from '@angular/core';

import { CreatePage } from '../create/create';
import { DiscoverPage } from '../discover/discover';
import { BuildsPage } from '../builds/builds';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CreatePage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = BuildsPage;

  constructor() {

  }
}
