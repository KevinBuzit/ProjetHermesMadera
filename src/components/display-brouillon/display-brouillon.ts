import { Component } from '@angular/core';
import {NavController, Events, NavParams} from "ionic-angular";
import {IdentificationProjetPage} from "../../pages/identification-projet/identification-projet";
import {GlobalProvider} from "../../providers/global/global";
import {Client} from "../../models/client.model";
import {Projet} from "../../models/projet.model";
import {EtatDevis} from "../../models/etatDevis.model";

@Component({
  selector: 'display-brouillon',
  templateUrl: 'display-brouillon.html'
})
export class DisplayBrouillonComponent {

  private client : Client;
  private projet : Projet;

  constructor(params: NavParams,
              public navCtrl: NavController,
              public events: Events,
              public global: GlobalProvider) {
    this.client = params.get('client');
    this.projet = params.get('projet');
  }

  goToIdentificationProjetPage(){
    this.navCtrl.push(IdentificationProjetPage,{'client':this.client});
  }

  saveInBrouillons(){
    this.events.publish('projet:brouillon');
    this.projet.etatDevis = EtatDevis.BROUILLON;
    this.global.projets.push(this.projet);

    if(null == this.client.projets){
      this.client.projets = [];
    }

    this.client.projets.push(this.projet);

    // this.appCtrl.getRootNav().push(IdentificationProjetPage,{'client':this.client});
    this.navCtrl.push(IdentificationProjetPage,{'client':this.client});
  }
}
