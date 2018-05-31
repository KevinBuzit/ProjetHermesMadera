import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../../pages/identification-projet/identification-projet';
import { Client } from '../../models/client.model';
import {GlobalProvider} from "../../providers/global/global";
import moment from 'moment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'add-customer',
  templateUrl: 'add-customer.html'
})
export class AddCustomerComponent {

  text: string;
  private client : Client;
  private clientForm = {
    genreClient:'',
    nomClient: '',
    prenomClient: '',
    adresseRueClient: '',
    codePostalClient: '',
    adresseVilleClient: '',
    telephoneClient: '',
    dateNaissanceClient: '',
    mailClient: '',
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider,
              private storage: Storage) {
  }

  ionViewDidLoad() {
  }
  addCustomer()
  {
    let referenceClient = this.global.clients ? this.global.clients.length+1 : 1;

    this.client  = new Client(
      referenceClient,
      this.clientForm.genreClient,
      this.clientForm.nomClient,
      this.clientForm.prenomClient,
      this.clientForm.adresseRueClient,
      this.clientForm.adresseVilleClient,
      this.clientForm.codePostalClient,
      this.clientForm.mailClient ,
      this.clientForm.telephoneClient,
      this.clientForm.dateNaissanceClient,
      (moment().format('DD/MM/YYYY')+" "+moment().format('HH:mm')),
      null );

    this.global.clients.push(this.client);
    this.storage.set('referenceClient',this.client.referenceClient)
    this.navCtrl.push(IdentificationProjetPage);
  }
  checkIfNotValid():boolean{

    let regexInjectionSQLString = "('(''|[^'])*')|(;)|(\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b)";
    let regexInjectionSQL = new RegExp(regexInjectionSQLString);

    let regexMailString ="[A-Za-z0-9._%+-]{3,30}@[a-zA-Z]{3,15}([.]{1}[a-zA-Z]{2,6}|[.]{1}[a-zA-Z]{2,6}[.]{1}[a-zA-Z]{2,6})"
    let regexMail = new RegExp(regexMailString);

    let regexNumeriqueString = "^[0-9]{0,20}$";
    let regexNumerique = new RegExp(regexNumeriqueString);

    let regexAlphaString = "^[a-zA-Z]{0,10}$";
    let regexAlpha = new RegExp(regexAlphaString);

    let regexCodePostalString = "^[a-zA-Z0-9]{0,10}$";
    let regexCodePostal = new RegExp(regexCodePostalString);

    let notValid : boolean = true;

    if(this.clientForm.genreClient
      && this.clientForm.nomClient
      && this.clientForm.prenomClient
      && this.clientForm.adresseRueClient
      && this.clientForm.codePostalClient
      && this.clientForm.mailClient
      && this.clientForm.telephoneClient
      && this.clientForm.dateNaissanceClient){

      notValid = false;
    }
    if (regexInjectionSQL.test(this.clientForm.nomClient) || regexInjectionSQL.test(this.clientForm.prenomClient) || regexInjectionSQL.test(this.clientForm.adresseRueClient)
      || regexInjectionSQL.test(this.clientForm.codePostalClient)  || regexInjectionSQL.test(this.clientForm.adresseVilleClient) || regexInjectionSQL.test(this.clientForm.telephoneClient)
      || regexInjectionSQL.test(this.clientForm.mailClient)){
        notValid = true;
    }
    if(!regexAlpha.test(this.clientForm.nomClient) || !regexAlpha.test(this.clientForm.prenomClient)|| !regexAlpha.test(this.clientForm.adresseVilleClient) || !regexNumerique.test(this.clientForm.telephoneClient) || !regexMail.test(this.clientForm.mailClient) || !regexCodePostal.test(this.clientForm.codePostalClient)) {
      notValid = true;
    }
    return notValid;
  }
  pop(){
    this.navCtrl.pop();
  }
}
