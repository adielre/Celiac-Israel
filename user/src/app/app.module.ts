import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page2Page } from '../pages/page2/page2';
import { DetailsPage } from '../pages/details/details';
import { FilterPage } from '../pages/filter/filter';
import { FormsModule } from '@angular/forms';

//import {HttpClientModule} from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { FirebaseService } from './firebase-service/firebase.service';

//validation
//import { Validators } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Page2Page,
    FilterPage,
    DetailsPage,
    //FirebaseService,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
  //  HttpClientModule
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Page2Page,
    DetailsPage,
    FilterPage
  ],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
  //  Validators,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
