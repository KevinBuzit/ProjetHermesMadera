import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Produit} from "../../models/produit.model";
import {Gamme} from "../../models/gamme.model";

@Component({
  selector: 'add-product',
  templateUrl: 'add-product.html'
})
export class AddProductComponent {

  private produit = {
    gamme : null,
    modele :  null,
    isolation :  null,
    finition :  null,
    couverture : null
  };

  private gammes : Array<Gamme>;

  constructor(public viewCtrl: ViewController,
              public global: GlobalProvider) {

    this.gammes = this.global.gammes;

    this.produit = {
      gamme : this.gammes[0],
      modele :  null,
      isolation :  null,
      finition :  null,
      couverture : null
    };

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addProduct() {
    let produit = new Produit(this.produit.isolation, this.produit.finition, this.produit.couverture, this.produit.modele  );
    this.viewCtrl.dismiss({'produit' : produit});
  }

  checkIfNotValid():boolean{

    let notValid : boolean = true;

    if(this.produit.gamme
      && this.produit.modele
      && this.produit.couverture
      && this.produit.isolation
      && this.produit.finition){

        notValid = false;
    }

    return notValid;
  }
}
