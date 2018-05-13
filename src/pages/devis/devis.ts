import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ModalController} from 'ionic-angular';
import {AccountPopoverComponent} from "../../components/account-popover/account-popover";
import {Produit} from "../../models/produit.model";
import {DisplayProductComponent} from "../../components/display-product/display-product";
import {Projet} from "../../models/projet.model";
import {DisplayBrouillonComponent} from "../../components/display-brouillon/display-brouillon";
import {Client} from "../../models/client.model";
import {Module} from "../../models/module.model";
import {DisplayModuleComponent} from "../../components/display-module/display-module";

@IonicPage()
@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {

  private projet : Projet;
  private refProjet : number;
  private client : Client;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController) {

    this.projet = navParams.get('projet');
    this.client = navParams.get('client');
    this.refProjet = navParams.get('index');
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(AccountPopoverComponent, {projet: this.projet});
    popover.present();
  }

  presentDisplayProductModal(product:Produit)
  {
    let displayProductModal = this.modalCtrl.create(DisplayProductComponent, { product: product });
    displayProductModal.present();
  }

  presentDisplayModuleModal(module:Module)
  {
    let displayModuleModal = this.modalCtrl.create(DisplayModuleComponent, { module: module });
    displayModuleModal.present();
  }

  cancel(){
    let displayBrouillonModal = this.modalCtrl.create(DisplayBrouillonComponent,{'client':this.client, 'projet':this.projet});
    displayBrouillonModal.present();
  }

  sendDevis(){

  }

}
