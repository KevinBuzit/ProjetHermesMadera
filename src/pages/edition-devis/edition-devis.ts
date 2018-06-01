import { Component } from '@angular/core';
import {IonicPage, ModalController, NavParams, NavController, LoadingController, ViewController} from 'ionic-angular';
import { AddProductComponent } from '../../components/add-product/add-product';
import {Produit} from "../../models/produit.model";
import {DisplayProductComponent} from "../../components/display-product/display-product";
import {DevisPage} from "../devis/devis";
import {Projet} from "../../models/projet.model";
import {Client} from "../../models/client.model";
import {GlobalProvider} from "../../providers/global/global";
import {AuthenticationPage} from "../authentication/authentication";
import { Storage } from '@ionic/storage';
import { cloneDeep } from 'lodash';

@IonicPage()
@Component({
  selector: 'page-edition-devis',
  templateUrl: 'edition-devis.html'
})
export class EditionDevisPage {

  private baseProjet : Projet;
  private updatedProjet : Projet;
  private client = Client;

  constructor(public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public navCtrl: NavController,
              public global: GlobalProvider,
              private storage: Storage,
              public loadingCtrl: LoadingController
  ) {

    this.presentLoadingDefault();
    this.client = this.navParams.get('client');
    this.updatedProjet = this.navParams.get('projet');
    this.baseProjet = cloneDeep(this.updatedProjet);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
    });

    loading.present();

    // Or to get a key/value pair
    this.storage.get('referenceEmploye').then((referenceEmploye)=>{
      loading.dismiss();
    },()=>{
      this.navCtrl.setRoot(AuthenticationPage);
    });
  }

  disconnect() {
    this.navCtrl.setRoot(AuthenticationPage);
    this.storage.remove('referenceClient');
    this.storage.remove('referenceEmploye');
  }

  presentAddProductModal() {
    let addProductModal = this.modalCtrl.create(AddProductComponent);
    addProductModal.onDidDismiss(produit => {

      if(null == this.updatedProjet.produits){
        this.updatedProjet.produits = [];
      }

      if(produit) {
        this.updatedProjet.produits.push(produit.produit);
      }
    });
    addProductModal.present();
  }

  presentDisplayProductModal(product:Produit)
  {
    let displayProductModal = this.modalCtrl.create(DisplayProductComponent, { product: product });
    displayProductModal.present();
  }

  goToDevisPage(){
    this.navCtrl.push(DevisPage, { 'projet': this.updatedProjet, 'client':this.client} );
  }

  cancel(){
    this.navCtrl.push(DevisPage, { 'projet': this.baseProjet, 'client':this.client} );
  }

  checkIfNotValid():boolean{

    let notValid : boolean = true;

    if(this.updatedProjet.produits && this.updatedProjet.produits.length > 0){

      if(this.updatedProjet.adresseProjet && this.updatedProjet.dateProjet && this.updatedProjet.nomProjet){
        notValid = false;
      }
    }

    return notValid;
  }

}
