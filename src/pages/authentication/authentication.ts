import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import { IdentificationClientPage } from '../identification-client/identification-client';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {Employe} from "../../models/employe.model";


@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {
  private matricule : number;
  private password : string;
  private pages: Array<{title: string, component: any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public menuCtrl:MenuController,
    public global: GlobalProvider,
    private alertCtrl: AlertController,
    private storage: Storage) {

    this.pages = [
      { title: 'Identification client', component: IdentificationClientPage },
    ];
  }

  login()
  {
    let trouve = false;
    let i = 0;
    let employe : Employe;

    while(!trouve && i< this.global.clients.length )
    {

      employe=this.global.projets[i].employe;

      if((employe.matriculeEmploye == this.matricule) &&( employe.motDePasseEmploye==this.password.trim()))
      {
        trouve=true;
      }

      i++;
    }
   if(trouve)
    {
      // set a key/value
      this.storage.set('referenceEmploye', employe.matriculeEmploye.toString()).then(()=>{
        this.navCtrl.setRoot(IdentificationClientPage);
      });
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
  checkIfNotValid():boolean{
    //Regex
    let regexAlphaNumString = "^[a-zA-Z0-9]{8}$";
    let regexAlphaNum = new RegExp(regexAlphaNumString);

    let regexInjectionSQLString = "('(''|[^'])*')|(;)|(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b)";
    let regexInjectionSQL = new RegExp(regexInjectionSQLString);

    let notValid : boolean = true;

    if(this.matricule
      && this.password){
      notValid = false;
    }
    if(!regexAlphaNum.test(String(this.matricule)) || regexInjectionSQL.test(this.password)) {
      notValid = true;
    }
    return notValid;
  }
}
