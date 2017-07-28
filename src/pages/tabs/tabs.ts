import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PillListPage } from '../pill-list/pill-list'
import {InboxPage} from "../inbox/inbox"

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InboxPage;
  tab2Root = PillListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
