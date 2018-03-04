import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

@Component({
  selector: 'add-product',
  templateUrl: 'add-product.html'
})
export class AddProductComponent {

  private gamme = null;
  private modele = null;

  constructor(public viewCtrl: ViewController, public global: GlobalProvider) {
    this.gamme = this.global.gammes[0];
    this.modele = this.gamme.modeles[0];

    console.log(this.gamme);
    console.log(this.modele);
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}
