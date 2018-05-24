import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import { IdentificationClientPage } from '../identification-client/identification-client';

import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  private matricule : number;
  private password : string;
  private pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController, public global: GlobalProvider, private alertCtrl: AlertController) {
    this.pages = [
      { title: 'Identification client', component: IdentificationClientPage },
    ];
  }
  ionViewDidLoad() {
  }
  login()
  {
    let trouve = false;
    let i = 0;

    while(!trouve && i< this.global.clients.length )
    {
      if((this.global.projets[i].employe.matriculeEmploye == this.matricule) &&( this.global.projets[i].employe.motDePasseEmploye==this.password))
      {
        trouve=true;
      }
      else {
        trouve=false;
        i++;
      }
    }
   if(trouve)
    {
      this.global.employe = this.global.projets[i].employe;
      this.navCtrl.push(IdentificationClientPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        message: 'Matricule ou Mot de passe incorrect',
        buttons: ['OK']
      });
      alert.present();

    }
  }
}
