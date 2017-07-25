import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
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

//Globals
import "moment"
import "moment-duration-format"


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PillListPage,
    CreatePillPage,
    PillFormComponent
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
    CreatePillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>){
    ngRedux.configureStore(rootReducer, initialState)
  }
}
