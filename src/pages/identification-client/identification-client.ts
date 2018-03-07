import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { NouveauClientPage } from '../nouveau-client/nouveau-client';
import { IdentificationProjetPage } from '../identification-projet/identification-projet';
import {GlobalProvider} from "../../providers/global/global";
import { AddCustomerComponent } from '../../components/add-customer/add-customer';



@IonicPage()
@Component({
  selector: 'page-identification-client',
  templateUrl: 'identification-client.html'
})

export class IdentificationClientPage {
  pages: Array<{title: string, component: any}>;
  customerName : string;
  customerSurname : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider,public modal: ModalController) {
    this.pages = [
      { title: 'Conception de devis', component: IdentificationProjetPage },
    ];
  }
  presentAddCustomerModal() {
    const addCustomerModal = this.modal.create(AddCustomerComponent);
    addCustomerModal.onDidDismiss(data => {
      console.log(data);
    });
    addCustomerModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificationClientPage');
  }
  createCustomer()
  {
      this.navCtrl.push(NouveauClientPage);
  }
  validate()
  {
    this
    this.navCtrl.push(IdentificationProjetPage);
  }

}
