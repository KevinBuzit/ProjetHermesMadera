import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConceptionDevisPage } from '../conception-devis/conception-devis';
/**
 * Generated class for the IdentificationProjetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-identification-projet',
  templateUrl: 'identification-projet.html',
})
export class IdentificationProjetPage {
  client : any;
  haveProjet = false;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.client = params.get('client');
    console.log("client",this.client);
    if(this.client.projets.length>0){
      this.haveProjet=true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificationProjetPage');
  }
  newProject()
  {
    this.navCtrl.push(ConceptionDevisPage);
  }

}
