import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { ConceptionDevisPage } from '../pages/conception-devis/conception-devis';
import {Client} from "../models/client.model";
import {Employe} from "../models/employe.model";
import {Metier} from "../models/metier.model";
import {Projet} from "../models/projet.model";
import {EtapeProjet} from "../models/etapeProjet.model";
import {EtatDevis} from "../models/etatDevis.model";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AuthenticationPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Conception de devis', component: ConceptionDevisPage },
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Authentication', component: AuthenticationPage }
    ];

    let client1 = new Client(1,'Client','Test','17 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00');
    let clients : Array<Client> = [];
    clients.push(client1);

    let metier = new Metier(1,'Commercial');
    let employe = new Employe(1,'test','Employe','Lambda','18 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00',metier);

    let projets : Array<Projet> = [];
    let projet1 = new Projet(1,'Maison bois','19 rue des lilas 29000 Brest','25/12/2018',2,5,employe,EtapeProjet.A_LA_SIGNATURE,EtatDevis.ACCEPTE,client1);

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
    this.nav.setRoot(page.component);
  }
}
