import { Component } from '@angular/core';
import {IonicPage, ModalController, NavParams, NavController, PopoverController} from 'ionic-angular';
import { AddProductComponent } from '../../components/add-product/add-product';
import {Produit} from "../../models/produit.model";
import {DisplayProductComponent} from "../../components/display-product/display-product";
import {DevisPage} from "../devis/devis";
import {AccountPopoverComponent} from "../../components/account-popover/account-popover";
import {Projet} from "../../models/projet.model";
import {EtatDevis} from "../../models/etatDevis.model";
import {Client} from "../../models/client.model";
import {GlobalProvider} from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-conception-devis',
  templateUrl: 'conception-devis.html'
})
export class ConceptionDevisPage {

  private projet : Projet;
  private refProjet : number;
  private devisPage: any;
  private client = Client;

  constructor(public modalCtrl: ModalController,
              public navParams: NavParams,
              public navCtrl: NavController,
              public global: GlobalProvider,
              public popoverCtrl: PopoverController) {

    this.devisPage = DevisPage;
    this.projet = navParams.get('projet');
    this.refProjet = navParams.get('index');
    this.client = navParams.get('client');
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(AccountPopoverComponent, {employe: this.global.employe});
    popover.present();
  }

  presentAddProductModal()
  {
    let addProductModal = this.modalCtrl.create(AddProductComponent);
    addProductModal.onDidDismiss(produit => {

      if(null == this.projet.produits){
        this.projet.produits = [];
      }
      this.projet.produits.push(produit)
    });
    addProductModal.present();
  }

  presentDisplayProductModal(product:Produit)
  {
    let displayProductModal = this.modalCtrl.create(DisplayProductComponent, { product: product });
    displayProductModal.present();
  }

  goToDevisPage(){
    this.navCtrl.push(DevisPage, { 'projet': this.projet, 'client':this.client} );
  }

  ionViewDidLoad() {
  }

  cancel(){
    this.navCtrl.pop();
  }

}
