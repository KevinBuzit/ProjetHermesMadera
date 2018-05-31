import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, LoadingController} from 'ionic-angular';
import { IdentificationProjetPage } from '../identification-projet/identification-projet';
import {GlobalProvider} from "../../providers/global/global";
import { AddCustomerComponent } from '../../components/add-customer/add-customer';
import { AlertController } from 'ionic-angular';
import {AuthenticationPage} from "../authentication/authentication";
import { Storage } from '@ionic/storage';
import {Client} from "../../models/client.model";

@IonicPage()
@Component({
  selector: 'page-identification-client',
  templateUrl: 'identification-client.html'
})

export class IdentificationClientPage {
  // private pages: Array<{title: string, component: any}>;
  private client = {
    nomClient: '',
    prenomClient: '',
    codePostalClient: ''
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider,
              public modal: ModalController,
              private alertCtrl: AlertController,
              public params: NavParams,
              private storage: Storage,
              public loadingCtrl: LoadingController) {
    // this.pages = [
    //   { title: 'Conception de devis', component: IdentificationProjetPage },
    // ];
  }

  ionViewCanEnter(): Promise<boolean>{
    return this.presentLoadingDefault().then(
      (canEnter) => {return canEnter},
      (cannotEnter) => {return cannotEnter}
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

  disconnect() {
    this.navCtrl.setRoot(AuthenticationPage);
    this.storage.remove('referenceClient');
    this.storage.remove('referenceEmploye');
  }

  presentAddCustomerModal() {
    const addCustomerModal = this.modal.create(AddCustomerComponent);
    addCustomerModal.present();
  }

  validate()
  {
    let trouve = false;
    let i = 0;
    let client : Client;

    while(!trouve && i< this.global.clients.length )
    {

      client=this.global.clients[i];

      if((client.nomClient.toUpperCase() == this.client.nomClient.toUpperCase())
        &&(client.prenomClient.toUpperCase() == this.client.prenomClient.toUpperCase())
        && (client.codePostalClient.toUpperCase() == this.client.codePostalClient.toUpperCase()))
      {
        trouve=true;
      }

      i++;
    }
    if(trouve)
    {
      this.storage.set('referenceClient',client.referenceClient.toString()).then(()=>{
        this.navCtrl.push(IdentificationProjetPage);
      });
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        message: 'Client introuvable',
        buttons: ['OK']
      });
      alert.present();
    }}
}
