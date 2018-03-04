import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';

import { ProductPage } from '../product/product';

/**
 * Generated class for the ConceptionDevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conception-devis',
  templateUrl: 'conception-devis.html',
})
export class ConceptionDevisPage {

  pushAddPage: any;

  constructor(public modal: ModalController, public navParams: NavParams) {
  }

  openAddProduct()
  {
    const addProductModal = this.modal.create('ProductPage');
    
    addProductModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConceptionDevisPage');
  }

}
