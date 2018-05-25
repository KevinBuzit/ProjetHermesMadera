import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {Produit} from "../../models/produit.model";

@Component({
  selector: 'display-product',
  templateUrl: 'display-product.html'
})
export class DisplayProductComponent {

  produit: Produit;

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.produit = params.get('produit');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
