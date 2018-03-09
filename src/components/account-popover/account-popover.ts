import { Component } from '@angular/core';
import {NavParams, ViewController, App} from "ionic-angular";
import {AuthenticationPage} from "../../pages/authentication/authentication";
import {Projet} from "../../models/projet.model";

@Component({
  selector: 'account-popover',
  templateUrl: 'account-popover.html'
})
export class AccountPopoverComponent {

  private projet : Projet;

  constructor(params: NavParams,
              public appCtrl: App,
              public viewCtrl: ViewController) {
    this.projet = params.get('projet');
  }

  disconnect() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(AuthenticationPage);
  }

}
