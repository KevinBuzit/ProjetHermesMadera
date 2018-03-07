import { Component } from '@angular/core';
import {IonicPage, ModalController, NavParams, NavController} from 'ionic-angular';
import { AddProductComponent } from '../../components/add-product/add-product';
import {Produit} from "../../models/produit.model";
import {DisplayProductComponent} from "../../components/display-product/display-product";
import {DevisPage} from "../devis/devis";

@IonicPage()
@Component({
  selector: 'page-conception-devis',
  templateUrl: 'conception-devis.html'
})
export class ConceptionDevisPage {

  private produits : Array<Produit>;
  private projet = {
    nomProjet: '',
    adresseProjet: '',
    dateProjet: '',
    margeCommercialeProjet: 0,
    margeEntrepriseProjet: 0,
    employe : null,
    etapeProjet : null,
    etatDevis : null
  };
  private devisPage: any;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController ) {
    this.devisPage = DevisPage;
    this.produits = [];
  }

  presentAddProductModal()
  {
    let addProductModal = this.modalCtrl.create(AddProductComponent);
    addProductModal.onDidDismiss(produit => {

      this.produits.push(produit)
    });
    addProductModal.present();
  }

  presentDisplayProductModal(product:Produit)
  {
    let displayProductModal = this.modalCtrl.create(DisplayProductComponent, { product: product });
    displayProductModal.present();
  }

  ionViewDidLoad() {
  }

  cancel(){
    this.navCtrl.pop();
  }

}
