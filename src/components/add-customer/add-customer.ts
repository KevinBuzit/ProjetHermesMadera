import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../../pages/identification-projet/identification-projet';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NouveauClientPage');
  }
  validate()
  {
    this.navCtrl.push(IdentificationProjetPage);
  }

}
