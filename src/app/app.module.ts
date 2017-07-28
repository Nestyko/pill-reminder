import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import { rootReducer, initialState } from '../reducers/root'


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PillListPage } from '../pages/pill-list/pill-list';
import { CreatePillPage } from '../pages/create-pill/create-pill'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PillFormComponent } from '../components/pill-form/pill-form';

//Services
import {DbService} from "../services/db"

//Globals
import "moment"
import "moment-duration-format"
import {InboxPage} from "../pages/inbox/inbox"
import {createEpicMiddleware} from "redux-observable"
import {createLogger} from "redux-logger"
import {DbEpics} from "../services/db.epics"
import {DbActions} from "../services/db.actions";
import {RootEpics} from "../services/root.epics";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PillListPage,
    CreatePillPage,
    PillFormComponent,
    InboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgReduxModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PillListPage,
    CreatePillPage,
    InboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DbService,
    DbEpics,
    DbActions,
    RootEpics,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<any>,
    private epics: RootEpics,
    private devTools: DevToolsExtension
  ){

    const logger = createLogger({
      diff: true,
      duration: true,
      timestamp: true
    })

    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    const epicMiddleware = createEpicMiddleware(this.epics.rootEpics)

    ngRedux.configureStore(
      rootReducer,
      initialState,
      [logger, epicMiddleware ],
      enhancers
    )
  }
}
