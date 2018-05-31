import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { ConceptionDevisPage } from '../conception-devis/conception-devis';
import { DevisPage } from '../devis/devis';
import { Client } from '../../models/client.model';
import {GlobalProvider} from "../../providers/global/global";
import {AuthenticationPage} from "../authentication/authentication";
import {IdentificationClientPage} from "../identification-client/identification-client";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-identification-projet',
  templateUrl: 'identification-projet.html',
})
export class IdentificationProjetPage {
  private client : Client;

  constructor(public navCtrl: NavController,
              public global: GlobalProvider,
              public params: NavParams,
              private storage: Storage,
              public loadingCtrl: LoadingController) {

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
            .catch(()=>{this.navCtrl.setRoot(AuthenticationPage)})
            .then(()=>{
              this.storage.get('referenceClient')
                .then((referenceClient)=>{
                  this.client = this.getClient(referenceClient);

                  if(!this.client){
                    reject(false);
                  }

                  loading.dismiss();
                  resolve(true);

                }).catch(()=>{
                reject(false);
              });
            });
        });
    });
  }

  getClient(referenceClient:string):Client {

    let trouve = false;
    let client : Client;
    let i = 0;

    while(!trouve && i< this.global.clients.length )
    {
      if((this.global.clients[i].referenceClient == parseInt(referenceClient)))
      {
        trouve=true;
        client = this.global.clients[i];
      }

      i++;
    }

    return client;
  }
  newProject()
  {
    this.navCtrl.push(ConceptionDevisPage,{ 'client': this.client });
  }

  detailsDevis(projet : any)
  {
    this.navCtrl.push(DevisPage,{ 'client': this.client , 'projet': projet});
  }

  pop(){
    this.navCtrl.pop();
  }

  disconnect() {
    this.navCtrl.setRoot(AuthenticationPage);
    this.storage.remove('referenceClient');
    this.storage.remove('referenceEmploye');
  }
}
