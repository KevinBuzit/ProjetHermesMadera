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
  pop(){
    this.navCtrl.pop();
  }
}
