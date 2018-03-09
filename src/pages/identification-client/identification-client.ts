import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { NouveauClientPage } from '../nouveau-client/nouveau-client';
import { IdentificationProjetPage } from '../identification-projet/identification-projet';
import {GlobalProvider} from "../../providers/global/global";
import { AddCustomerComponent } from '../../components/add-customer/add-customer';
import { AlertController } from 'ionic-angular';
import { Employe } from '../../models/employe.model';


@IonicPage()
@Component({
  selector: 'page-identification-client',
  templateUrl: 'identification-client.html'
})

export class IdentificationClientPage {
  private pages: Array<{title: string, component: any}>;
  private employe : Employe;
  private client = {
    nomClient: '',
    prenomClient: '',
    codePostalClient: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider,public modal: ModalController,  private alertCtrl: AlertController,  public params: NavParams) {
    this.pages = [
      { title: 'Conception de devis', component: IdentificationProjetPage },
    ];
    this.employe = params.get('employe');
  }
  presentAddCustomerModal() {
    const addCustomerModal = this.modal.create(AddCustomerComponent);
    addCustomerModal.onDidDismiss(data => {
      console.log(data);
    });
    addCustomerModal.present();
  }
  ionViewDidLoad() {
  }
  createCustomer()
  {
      this.navCtrl.push(NouveauClientPage);
  }
  validate()
  {
    let trouve = false;
    let i = 0;
    while(!trouve && i< this.global.clients.length )
    {
      if((this.global.clients[0].nomClient.toUpperCase() == this.client.nomClient.toUpperCase()) &&(this.global.clients[i].prenomClient.toUpperCase() == this.client.prenomClient.toUpperCase()) && (this.global.clients[i].codePostalClient.toUpperCase() == this.client.codePostalClient.toUpperCase()))
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
      this.navCtrl.push(IdentificationProjetPage,{ 'client': this.global.clients[i],'employe':  this.employe });
      console.log("employe ",this.employe);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'Client introuvable',
        buttons: ['OK']
      });
      alert.present();
    }}
}
