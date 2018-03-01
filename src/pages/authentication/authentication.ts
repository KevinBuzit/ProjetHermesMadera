import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {GlobalProvider} from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController, public global: GlobalProvider ) {
  }

  ionViewDidLoad() {
    console.log(this.global.clients[0].nomClient);
  }
}
