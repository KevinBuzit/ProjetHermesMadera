import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdentificationProjetPage } from '../identification-projet/identification-projet';

/**
 * Generated class for the NouveauClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
