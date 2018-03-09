import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { ConceptionDevisPage } from '../pages/conception-devis/conception-devis';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { NouveauClientPage } from '../pages/nouveau-client/nouveau-client';
import { IdentificationClientPage } from '../pages/identification-client/identification-client';
import { IdentificationProjetPage } from '../pages/identification-projet/identification-projet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {AddProductComponent} from "../components/add-product/add-product";
import {AddCustomerComponent} from "../components/add-customer/add-customer";
import {DisplayProductComponent} from "../components/display-product/display-product";
import {DevisPage} from "../pages/devis/devis";
import {AccountPopoverComponent} from "../components/account-popover/account-popover";
import {DisplayBrouillonComponent} from "../components/display-brouillon/display-brouillon";

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    ConceptionDevisPage,
    AuthenticationPage,
    IdentificationClientPage,
    NouveauClientPage,
    AddProductComponent,
    AddCustomerComponent,
    DisplayProductComponent,
    IdentificationProjetPage,
    DevisPage,
    AccountPopoverComponent,
    DisplayBrouillonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    ConceptionDevisPage,
    AuthenticationPage,
    DisplayProductComponent,
    IdentificationClientPage,
    NouveauClientPage,
    AddProductComponent,
    AddCustomerComponent,
    IdentificationProjetPage,
    DevisPage,
    AccountPopoverComponent,
    DisplayBrouillonComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
