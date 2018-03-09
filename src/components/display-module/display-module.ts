import { Component } from '@angular/core';
import {Module} from "../../models/module.model";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'display-module',
  templateUrl: 'display-module.html'
})
export class DisplayModuleComponent {

  private module : Module;

  constructor(params: NavParams,public viewCtrl: ViewController) {
    this.module = params.get('module');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
