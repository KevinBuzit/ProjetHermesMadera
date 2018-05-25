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

  private product = {
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

    this.product = {
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
    let produit = new Produit(this.product.isolation, this.product.finition, this.product.couverture, this.product.modele  );
    this.viewCtrl.dismiss({'produit' : produit});
  }

  checkIfNotValid():boolean{

    let notValid : boolean = true;

    if(this.product.gamme
      && this.product.modele
      && this.product.couverture
      && this.product.isolation
      && this.product.finition){

        notValid = false;
    }

    return notValid;
  }
}
