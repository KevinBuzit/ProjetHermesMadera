import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../../pages/identification-projet/identification-projet';
import { Client } from '../../models/client.model';
import {GlobalProvider} from "../../providers/global/global";

import moment from 'moment';


/**
 * Generated class for the AddCustomerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider) {
  }

  ionViewDidLoad() {
  }
  addCustomer()
  {
    this.client  = new Client(2,this.clientForm.genreClient, this.clientForm.nomClient, this.clientForm.prenomClient, this.clientForm.adresseRueClient, this.clientForm.adresseVilleClient, this.clientForm.codePostalClient, this.clientForm.mailClient ,this.clientForm.telephoneClient, this.clientForm.dateNaissanceClient, (moment().format('DD/MM/YYYY')+" "+moment().format('HH:mm')),null );
    this.global.clients.push(this.client);
    console.log('global',this.global);
    this.navCtrl.push(IdentificationProjetPage,{ 'client': this.client });

  }
  pop(){
    this.navCtrl.pop();
  }
}
