import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AllProvider } from '../providers/all/all';
import { HttpClientModule } from '@angular/common/http';

/* 
    = Ionic CLI :
      - To Generate a Page ==> ionic g page <page-name>
      - To Generate a Provider(service) ==> ionic g provider <provider-name>
*/

/*
  = Remember :
    - NavController ==> is the Module which is responsible for the Navigation in the APplication -> Stack Concept
    ================================================================================================
    - NavParams ==> is the Module which is responsible for getting the params passed to the page or component
*/

/*
  = Note :
    - Don't Forget to add the HttpClient in the ( imports ) array if you use it
    - If you have an error with the ngModel or ngForm add this import :
     ---> import { FormsModule } from '@angular/forms'
    - and add the [ FormsModule ] in the imports Array
    ================================================================================================
    - Every Page you generate and you use it in the application you must add it to ( declarations , entryComponents )
    - You can put the page in the ( declarations ) array if you add it and you don't use it
    ================================================================================================
    - Every Provider you generate and you use it in the application you must add it to ( providers )
    ================================================================================================

*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AllProvider
  ]
})
export class AppModule {}
