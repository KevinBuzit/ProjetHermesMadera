import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ConceptionDevisPage } from '../pages/conception-devis/conception-devis';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { IdentificationClientPage } from '../pages/identification-client/identification-client';
import { IdentificationProjetPage } from '../pages/identification-projet/identification-projet';
import { EditionDevisPage } from '../pages/edition-devis/edition-devis';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import {AddProductComponent} from "../components/add-product/add-product";
import {AddCustomerComponent} from "../components/add-customer/add-customer";
import {DevisPage} from "../pages/devis/devis";
import { DisplayProductComponent } from '../components/display-product/display-product';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ConceptionDevisPage,
    AuthenticationPage,
    IdentificationClientPage,
    AddProductComponent,
    AddCustomerComponent,
    IdentificationProjetPage,
    DisplayProductComponent,
    DevisPage,
    EditionDevisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConceptionDevisPage,
    AuthenticationPage,
    DisplayProductComponent,
    IdentificationClientPage,
    AddProductComponent,
    AddCustomerComponent,
    IdentificationProjetPage,
    DevisPage,
    EditionDevisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
