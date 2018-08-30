import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CreatePage } from '../create/create';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CreatePage;

  constructor() {

  }
}
