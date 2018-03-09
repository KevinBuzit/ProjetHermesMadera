import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../../pages/identification-projet/identification-projet';
import { Client } from '../../models/client.model';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  addCustomer()
  {
    this.client  = new Client(2,this.clientForm.genreClient, this.clientForm.nomClient, this.clientForm.prenomClient, this.clientForm.adresseRueClient, this.clientForm.adresseVilleClient, this.clientForm.codePostalClient, this.clientForm.mailClient ,this.clientForm.telephoneClient, this.clientForm.dateNaissanceClient, (moment().format('YYYYMMDD')+" "+moment().format('HHmm')),null );
    console.log('client add customer',this.client);
    console.log('clientForm add customer',this.clientForm);

    this.navCtrl.push(IdentificationProjetPage,{ 'client': this.client });

  }

}
