import {Isolation} from "./isolation.model";
import {FinitionExterieure} from "./finitionExterieure.model";
import {Couverture} from "./couverture.model";
import {Modele} from "./modele.model";

export class Produit {
  private _isolation: Isolation;
  private _finitionExterieure: FinitionExterieure;
  private _couverture: Couverture;
  private _modele:Modele;


  constructor(isolation: Isolation, finitionExterieure: FinitionExterieure, couverture: Couverture, modele: Modele) {
    this._isolation = isolation;
    this._finitionExterieure = finitionExterieure;
    this._couverture = couverture;
    this._modele = modele;
  }

  get isolation(): Isolation {
    return this._isolation;
  }

  set isolation(value: Isolation) {
    this._isolation = value;
  }

  get finitionExterieure(): FinitionExterieure {
    return this._finitionExterieure;
  }

  set finitionExterieure(value: FinitionExterieure) {
    this._finitionExterieure = value;
  }

  get couverture(): Couverture {
    return this._couverture;
  }

  set couverture(value: Couverture) {
    this._couverture = value;
  }

  get modele(): Modele {
    return this._modele;
  }

  set modele(value: Modele) {
    this._modele = value;
  }
}
