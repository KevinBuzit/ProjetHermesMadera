import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConceptionDevisPage } from '../conception-devis/conception-devis';
import { Projet } from '../../models/projet.model';
import { DevisPage } from '../devis/devis';
import { Employe } from '../../models/employe.model';
import { Client } from '../../models/client.model';
import {EtapeProjet} from "../../models/etapeProjet.model";
import {GlobalProvider} from "../../providers/global/global";
import { IdentificationClientPage } from '../identification-client/identification-client';

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

  constructor(public navCtrl: NavController,public global: GlobalProvider, public params: NavParams) {
    this.client = params.get('client');
    this.employe = this.global.employe;

    if(!(this.client.projets===null))
    {
      if(this.client.projets.length>0){
        this.haveProjet=true;
      }
    }
  }

  ionViewDidLoad() {
  }

  newProject()
  {
    this.createdProjet = new Projet(null,null,null,2,5,this.employe,EtapeProjet.A_LA_SIGNATURE,null,null);
    this.navCtrl.setRoot(ConceptionDevisPage,{ 'projet': this.createdProjet,'index': 20, 'client': this.client});
  }

  detailsDevis(projet : any, index : any )
  {
    this.navCtrl.setRoot(DevisPage,{ 'projet': projet,'index': index, 'client': this.client });
  }
  pop(){
    this.navCtrl.push(IdentificationClientPage);
  }
}
