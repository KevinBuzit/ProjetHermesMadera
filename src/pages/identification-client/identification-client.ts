import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NouveauClientPage } from '../nouveau-client/nouveau-client';


/**
 * Generated class for the IdentificationClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identification-client',
  templateUrl: 'identification-client.html',

})
export class IdentificationClientPage {
  pages: Array<{title: string, component: any}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Conception de devis', component: IdentificationClientPage },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificationClientPage');
  }
  createCustomer()
  {
      this.navCtrl.push(NouveauClientPage);
  }

}
