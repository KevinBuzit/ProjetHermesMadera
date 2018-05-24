import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController} from 'ionic-angular';
import {AccountPopoverComponent} from "../../components/account-popover/account-popover";
import {Projet} from "../../models/projet.model";
import {DisplayBrouillonComponent} from "../../components/display-brouillon/display-brouillon";
import {Client} from "../../models/client.model";
import {GlobalProvider} from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {

  private projet : Projet;
  private refProjet : number;
  private client : Client;
  private totalHT : number;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              public global: GlobalProvider) {

    this.projet = navParams.get('projet');
    this.client = navParams.get('client');
    this.refProjet = navParams.get('index');
    this.totalHT = this.calculateDevisTotalHT();
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(AccountPopoverComponent, {projet: this.projet});
    popover.present();
  }

  cancel(){
    let displayBrouillonModal = this.modalCtrl.create(DisplayBrouillonComponent,{'client':this.client, 'projet':this.projet});
    displayBrouillonModal.present();
  }

  sendDevis(){

  }

  calculateDevisTotalHT():number{
    let totalHT = 0;

    for(let produit of this.projet.produits){

      for(let module of produit.modele.modules){
        totalHT += module.prixHTModule * module.quantite;
      }
    }

    return totalHT;
  }

  calculateProduitTotalHT(referenceModele : number):number{
    let totalHT = 0;
    let index = 0;

    while(index < this.projet.produits.length-1){
      if(referenceModele == this.projet.produits[index].modele.referenceModele){
        for(let module of this.projet.produits[index].modele.modules){
          totalHT += module.prixHTModule * module.quantite;
        }
      }

      index++;
    }

    return totalHT;
  }

}
