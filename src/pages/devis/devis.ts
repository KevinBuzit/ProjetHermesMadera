import { Component } from '@angular/core';
import {
  IonicPage, NavController, NavParams, ModalController,
  AlertController, LoadingController, ToastController
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
              public loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
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

  presentToast(message:string,duration:number,position:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.onDidDismiss(() => {
    });

    toast.present();
  }

  cancel(){
    switch(this.projet.etatDevis) {

      case EtatDevis.BROUILLON:
        let currentIndexBrouillon = this.navCtrl.getActive().index;

        let alertBrouillon = this.alertCtrl.create({
          title: 'Enregistrer ?',
          buttons: [
            {
              text: 'Oui',
              handler: data => {
                if(this.updateProject(this.client.referenceClient, this.projet)){
                  // this.appCtrl.getRootNav().push(IdentificationProjetPage,{'client':this.client});
                  this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                    this.navCtrl.remove(currentIndexBrouillon);
                    this.navCtrl.remove(currentIndexBrouillon-1);
                  })
                } else{
                  this.presentToast('Erreur: Impossible d\'enregistrer le projet',3000,'bottom');
                }
              }
            },
            {
              text: 'Non',
              handler: data => {
                this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                  this.navCtrl.remove(currentIndexBrouillon);
                  this.navCtrl.remove(currentIndexBrouillon-1);
                })
              }
            }
          ]
        });

        alertBrouillon.present();
      break;

      case EtatDevis.REFUSE:
        let currentIndexRefuse = this.navCtrl.getActive().index;

        let alertRefuse = this.alertCtrl.create({
          title: 'Enregistrer en tant que brouillon ?',
          buttons: [
            {
              text: 'Oui',
              handler: data => {
                this.projet.etatDevis = EtatDevis.BROUILLON;

                if(this.updateProject(this.client.referenceClient, this.projet)){
                  // this.appCtrl.getRootNav().push(IdentificationProjetPage,{'client':this.client});
                  this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                    this.navCtrl.remove(currentIndexRefuse);
                    this.navCtrl.remove(currentIndexRefuse-1);
                  })
                } else{
                  this.presentToast('Erreur: Impossible d\'enregistrer le projet en brouillon',3000,'bottom');
                }
              }
            },
            {
              text: 'Non',
              handler: data => {
                this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                  this.navCtrl.remove(currentIndexRefuse);
                  this.navCtrl.remove(currentIndexRefuse-1);
                })
              }
            }
          ]
        });

        alertRefuse.present();
        break;

      case EtatDevis.ACCEPTE:
        this.navCtrl.pop();
        break;

      case EtatDevis.EN_ATTENTE:
        this.navCtrl.pop();
        break;

      case EtatDevis.EN_FACTURATION:
        this.navCtrl.pop();
        break;

      case EtatDevis.EN_COMMANDE:
        this.navCtrl.pop();
        break;

      default:
        let currentIndexDefault = this.navCtrl.getActive().index;

        let alertDefault = this.alertCtrl.create({
          title: 'Enregistrer en tant que brouillon ?',
          buttons: [
            {
              text: 'Oui',
              handler: data => {
                if(this.addProject(this.client.referenceClient, this.projet)){
                  this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                    this.navCtrl.remove(currentIndexDefault);
                    this.navCtrl.remove((currentIndexDefault-1));                  })
                } else {
                  this.presentToast('Erreur: Impossible d\'enregistrer le projet en brouillon',3000,'bottom');
                }
              }
            },
            {
              text: 'Non',
              handler: data => {
                this.navCtrl.push(IdentificationProjetPage,{'client':this.client}).then(() =>{
                  this.navCtrl.remove(currentIndexDefault);
                  this.navCtrl.remove((currentIndexDefault-1));                })
              }
            }
          ]
        });

        alertDefault.present();
        break;
    }
  }

  updateProject(referenceClient:number, projet:Projet):boolean {
    let updated : boolean = false;

    let client = this.getClientInClients(referenceClient);

    if(client) {

      let indexProjetInClient : number = this.getIndexOfProjet(projet.referenceProjet, client.projets);
      let indexProjetInProjets : number = this.getIndexOfProjet(projet.referenceProjet, this.global.projets);

      if(indexProjetInClient != -1 && indexProjetInProjets != -1) {
        client.projets[indexProjetInClient] = projet;
        this.global.projets[indexProjetInProjets] = projet;
        updated = true;
      }
    }

    return updated;
  }

  getIndexOfProjet(referenceProjet:number, projets:Array<Projet>):number{

    let found : boolean = false;
    let index : number = 0;

    while(!found && index < projets.length){
      let projet : Projet = projets[index];

      if(referenceProjet === projet.referenceProjet){
        found = true;
      }else{
        index++;
      }
    }

    return found ? index : -1;
  }

  getClientInClients(referenceClient:number):Client {

    let index : number = 0;
    let client : Client = null;

    while(!client && index < this.global.clients.length) {

      if (referenceClient == this.global.clients[index].referenceClient) {
        client = this.global.clients[index];
      }
      index++;
    }

    return client;
  }

  sendDevis(){

    let alert = this.alertCtrl.create({
      title: 'Valider le devis ?',
      buttons: [{
        text: 'Oui',
        role: 'data',
        handler: data =>
        {
          let alert = this.alertCtrl.create({
            title: 'Un mail a été envoyé',
            buttons: [{
              text: 'Ok',
              role: 'cancel',
              handler: data => {

                if(this.canUpdateOrSend()){
                  this.projet.etatDevis = EtatDevis.EN_ATTENTE;

                  if(!this.projet.etatDevis){
                    this.addProject(this.client.referenceClient,this.projet);
                  }else{
                    this.updateProject(this.client.referenceClient,this.projet);
                  }

                  this.navCtrl.push(IdentificationProjetPage);
                }
              }
            }]
          });
          alert.present();
        }},
        {
          text: 'Non',
          role: 'data',
          handler: data => {}
        }]
    });
    alert.present();
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

  pop(){
    this.navCtrl.pop();
  }

  addProject(referenceClient:number,projet:Projet):boolean {

    let added = false;
    let client = this.getClientInClients(referenceClient);

    if(client) {

      if (!client.projets) {
        client.projets = [];
      }

      client.projets.push(projet);
      this.global.projets.push(projet);
      added = true;
    }

    return added;
  }

  canUpdateOrSend():boolean{
    return this.projet.etatDevis == EtatDevis.BROUILLON || this.projet.etatDevis == EtatDevis.REFUSE || !this.projet.etatDevis;
  }

  update(){
    this.navCtrl.push(EditionDevisPage, { 'projet': this.projet, 'client':this.client} );
  }
}
