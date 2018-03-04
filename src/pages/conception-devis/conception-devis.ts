import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { AddProductComponent } from '../../components/add-product/add-product';

@IonicPage()
@Component({
  selector: 'page-conception-devis',
  templateUrl: 'conception-devis.html'
})
export class ConceptionDevisPage {

  constructor(public modal: ModalController, public navParams: NavParams) {
  }

  presentAddProductModal()
  {
    const addProductModal = this.modal.create(AddProductComponent);
    addProductModal.onDidDismiss(data => {
      console.log(data);
    });
    addProductModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConceptionDevisPage');
  }

}
