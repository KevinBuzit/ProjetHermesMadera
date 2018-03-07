import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";
import {Produit} from "../../models/produit.model";

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

  constructor(public viewCtrl: ViewController,
              public global: GlobalProvider) {

    this.product = {
      gamme : this.global.gammes[0],
      modele :  this.global.gammes[0].modeles[0],
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
    this.viewCtrl.dismiss(produit);
  }
}
