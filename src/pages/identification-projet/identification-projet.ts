import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConceptionDevisPage } from '../conception-devis/conception-devis';
import { Projet } from '../../models/projet.model';
import { DevisPage } from '../devis/devis';
import { Employe } from '../../models/employe.model';
import { Client } from '../../models/client.model';
import {EtapeProjet} from "../../models/etapeProjet.model";


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
  private client : Client;
  private haveProjet = false;
  private createdProjet : Projet;
  private employe : Employe;


  constructor(public navCtrl: NavController, public params: NavParams) {
    this.client = params.get('client');
    console.log("client",this.client);
    this.employe = params.get('employe');
    console.log("employe identification projet ",this.employe);

    if(this.client.projets.length>0){
      this.haveProjet=true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdentificationProjetPage');
  }
  newProject()
  {

    this.createdProjet.employe=this.employe;
    this.createdProjet.margeCommercialeProjet=2;
    this.createdProjet.margeEntrepriseProjet=5;
    this.createdProjet.etapeProjet= EtapeProjet.A_LA_SIGNATURE;


    this.navCtrl.push(ConceptionDevisPage,{ 'projet': this.createdProjet});
  }
  detailsDevis(projet : any, index : any )
  {
    this.navCtrl.push(DevisPage,{ 'projet': projet,'index': index });
    console.log('projet',projet);
    console.log('index : ',index);


  }

}
