import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {Produit} from "../../models/produit.model";

@Component({
  selector: 'display-product',
  templateUrl: 'display-product.html'
})
export class DisplayProductComponent {

  product: Produit;

  constructor(params: NavParams, public viewCtrl: ViewController) {
    this.product = params.get('product');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
