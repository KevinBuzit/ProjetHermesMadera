import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../identification-projet/identification-projet';

@IonicPage()
@Component({
  selector: 'page-nouveau-client',
  templateUrl: 'nouveau-client.html',
})
export class NouveauClientPage {

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
