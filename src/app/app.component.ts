import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { ConceptionDevisPage } from '../pages/conception-devis/conception-devis';
import {AuthenticationPage} from "../pages/authentication/authentication";
// import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AuthenticationPage;

  pages: Array<{title: string, component: any, img:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // get current
    // console.log(this.screenOrientation.type);

    // set to landscape
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Conception de devis', component: ConceptionDevisPage, img: 'file.png' },
      { title: 'Modalités de paiement', component: ListPage, img: 'card.png' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
