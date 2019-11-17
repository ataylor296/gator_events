import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPageModule } from './filter/filter.module';
import { FilterPage } from './filter/filter.page';
import { HomePageModule } from './home/home.module';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';

var CREDENTIALS = {
  apiKey: "AIzaSyBMRhqbe7qREyrUXNcDikq8FfIOtOhkLtU",
  authDomain: "gator-events.firebaseapp.com",
  databaseURL: "https://gator-events.firebaseio.com",
  projectId: "gator-events",
  storageBucket: "gator-events.appspot.com",
  messagingSenderId: "665013836258",
  appId: "1:665013836258:web:88eed018e2fc321827c1bb",
  measurementId: "G-9B6ZRES3BL"
};

firebase.initializeApp(CREDENTIALS)

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],  //Had FilterPage
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(CREDENTIALS),
    AppRoutingModule,
    // HomePageModule,
    // FilterPageModule
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
