import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import { ConceptionDevisPage } from '../conception-devis/conception-devis';

import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  private matricule : number;
  private password : string;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController, public global: GlobalProvider, private alertCtrl: AlertController) {
    this.pages = [
      { title: 'Conception de devis', component: ConceptionDevisPage },
    ];

  }
  ionViewDidLoad() {
    console.log(this.global.clients[0].nomClient);
  }
  login()
  {

   if((this.global.projets[0].employe.matriculeEmploye == this.matricule) &&( this.global.projets[0].employe.motDePasseEmploye==this.password))
    {
      this.navCtrl.push(ConceptionDevisPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'Matricule ou Mot de passe incorrect',
        buttons: ['OK']
      });
      alert.present();

    }
  }
}
