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

@IonicPage()
@Component({
  selector: 'page-edition-devis',
  templateUrl: 'edition-devis.html'
})
export class EditionDevisPage {

  private projet : Projet;
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
    this.projet = this.navParams.get('projet');
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

  pop(){
    this.navCtrl.pop();
  }

  presentAddProductModal()
  {
    let addProductModal = this.modalCtrl.create(AddProductComponent);
    addProductModal.onDidDismiss(data => {

      if(null == this.projet.produits){
        this.projet.produits = [];
      }
      this.projet.produits.push(data.produit);
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

  checkIfNotValid():boolean{

    let notValid : boolean = true;

    if(this.projet.produits && this.projet.produits.length > 0){

      if(this.projet.adresseProjet && this.projet.dateProjet && this.projet.nomProjet){
        notValid = false;
      }
    }

    return notValid;
  }

}
