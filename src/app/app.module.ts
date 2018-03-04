import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { ConceptionDevisPage } from '../pages/conception-devis/conception-devis';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { NouveauClientPage } from '../pages/nouveau-client/nouveau-client';

import { ProductPage } from '../pages/product/product';
import { IdentificationClientPage } from '../pages/identification-client/identification-client';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ConceptionDevisPage,
    AuthenticationPage,
    IdentificationClientPage,
    NouveauClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ConceptionDevisPage,
    AuthenticationPage,
    IdentificationClientPage,
    NouveauClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
