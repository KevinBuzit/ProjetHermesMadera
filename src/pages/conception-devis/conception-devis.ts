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
import {EtapeProjet} from "../../models/etapeProjet.model";

@IonicPage()
@Component({
  selector: 'page-conception-devis',
  templateUrl: 'conception-devis.html'
})
export class ConceptionDevisPage {

  private projet : Projet;
  private client : Client;
  private all : boolean;

  constructor(public modalCtrl: ModalController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public navCtrl: NavController,
              public global: GlobalProvider,
              private storage: Storage,
              public loadingCtrl: LoadingController
  ) {

    this.all = false;

    this.presentLoadingDefault();
    this.client = this.navParams.get('client');

    let referenceProjet = this.global.projets ? this.global.projets.length+1 : 1;
    this.projet = new Projet(referenceProjet,null,null,null,null,EtapeProjet.A_LA_SIGNATURE,null,null);
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

  presentDisplayProductModal(produit:Produit)
  {
    let displayProductModal = this.modalCtrl.create(DisplayProductComponent, { produit: produit });
    displayProductModal.present();
  }

  goToDevisPage(){
    this.navCtrl.push(DevisPage, { 'projet': this.projet, 'client':this.client} );
  }

  removeProduct(produit:Produit){
    this.projet.produits.splice( this.projet.produits.indexOf(produit), 1 );
  }

  removeAllProducts(){
    this.projet.produits = null;
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
