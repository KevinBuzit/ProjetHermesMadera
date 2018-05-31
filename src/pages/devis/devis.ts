import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ModalController,
  AlertController, LoadingController
} from 'ionic-angular';
import {Projet} from "../../models/projet.model";
import {Client} from "../../models/client.model";
import {GlobalProvider} from "../../providers/global/global";
import {EtatDevis} from "../../models/etatDevis.model";
import {IdentificationProjetPage} from "../identification-projet/identification-projet";
import {AuthenticationPage} from "../authentication/authentication";
import { Storage } from '@ionic/storage';
import {Produit} from "../../models/produit.model";
import { EditionDevisPage } from '../edition-devis/edition-devis';

@IonicPage()
@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {

  private projet : Projet;
  private client : Client;
  private totalHT : number;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public global: GlobalProvider,
              private storage: Storage,
              public loadingCtrl: LoadingController) {
  }

  ionViewCanEnter(): Promise<boolean>{
    return this.presentLoadingDefault().then(
      (canEnter) => {

        this.client = this.navParams.get('client');
        this.projet = this.navParams.get('projet');
        this.totalHT = this.calculateDevisTotalHT(this.projet.produits);

        return (this.client && this.projet && this.totalHT) ? true : false;
      },
      (cannotEnter) => {return false}
    );
  }

  presentLoadingDefault():Promise<boolean> {
    let loading = this.loadingCtrl.create({
      content: 'Chargement...'
    });

    return new Promise((resolve,reject)=>{

      loading.present()
        .catch(()=>{reject(false);})
        .then(()=>{
          this.storage.get('referenceEmploye')
            .catch(()=>{reject(false)})
            .then(()=>{
              loading.dismiss();
              resolve(true);
            });
        });
    });
  }

  cancel(){
    let currentIndex = this.navCtrl.getActive().index;

    let alert = this.alertCtrl.create({
      title: 'Enregistrer en tant que brouillon ?',
      buttons: [
        {
        text: 'Oui',
        handler: data => {
          this.projet.etatDevis = EtatDevis.BROUILLON;
          this.global.projets.push(this.projet);

          if(null == this.client.projets){
            this.client.projets = [];
          }

          this.global.projets.push(this.projet);

          // this.appCtrl.getRootNav().push(IdentificationProjetPage,{'client':this.client});
          this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
            this.navCtrl.remove(currentIndex);
          })
        }
        },
        {
          text: 'Non',
          role: 'cancel',
          handler: data => {
            this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
              this.navCtrl.remove(currentIndex);
            })
          }
        }
      ]
    });
    alert.present();
  }

  sendDevis(){
    this.projet.etatDevis=EtatDevis.EN_ATTENTE;

    if(this.addProjectToClient(this.client.referenceClient.toString(),this.projet)){
      // let currentIndex = this.navCtrl.getActive().index;
      this.navCtrl.push(IdentificationProjetPage).then(() => {
        // this.navCtrl.remove(currentIndex);
      });
    } else {
      let currentIndex = this.navCtrl.getActive().index;
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        message: 'Impossible d\'ajouter le projet',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          handler: data => {
            this.navCtrl.push(IdentificationProjetPage).then(() => {
              this.navCtrl.remove(currentIndex);
              this.navCtrl.remove(currentIndex-1);
            });
          }
        }],
        enableBackdropDismiss:false
      });
      alert.present();
    }

  }

  disconnect() {
    this.navCtrl.setRoot(AuthenticationPage);
    this.storage.remove('referenceClient');
    this.storage.remove('referenceEmploye');
  }

  calculateDevisTotalHT(produits:Array<Produit>):number{
    let totalHT = 0;

    for(let produit of produits){

      for(let module of produit.modele.modules){
        totalHT += module.prixHTModule * module.quantite;
      }
    }

    return totalHT;
  }

  calculateProduitTotalHT(referenceModele : number):number{
    let totalHT = 0;
    let index = 0;

    while(index < this.projet.produits.length){

      if(referenceModele == this.projet.produits[index].modele.referenceModele){
        for(let module of this.projet.produits[index].modele.modules){
          totalHT += module.prixHTModule * module.quantite;
        }
      }

      index++;
    }

    return totalHT;
  }

  pop(){
    this.navCtrl.pop();
  }

  addProjectToClient(referenceClient:string,projet:Projet):boolean {

    let added = false;
    let i = 0;

    while(!added && i< this.global.clients.length )
    {
      if((this.global.clients[i].referenceClient == parseInt(referenceClient)))
      {
        if(!this.global.clients[i].projets){
          this.global.clients[i].projets = [];
        }

        this.global.clients[i].projets.push(projet);
        added=true;
      }

      i++;
    }

    return added;
  }

  canUpdate():boolean{
    if(this.projet.etatDevis == EtatDevis.BROUILLON || this.projet.etatDevis == EtatDevis.REFUSE){
      return false
    }
    else{
      return true
    }
  }

  update(){
    this.navCtrl.push(EditionDevisPage, { 'projet': this.projet, 'client':this.client} );
  }
}
