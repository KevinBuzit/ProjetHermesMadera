import {Isolation} from "./isolation.model";
import {FinitionExterieure} from "./finitionExterieure.model";
import {FinitionInterieure} from "./finitionInterieure.model";
import {Couverture} from "./couverture.model";
import {Modele} from "./modele.model";

export class Produit {
  private _referenceProduit: number;
  private _isolation: Isolation;
  private _finitionExterieure: FinitionExterieure;
  private _finitionInterieure: FinitionInterieure;
  private _couverture: Couverture;
  private _modele:Modele;

  constructor(referenceProduit: number, isolation: Isolation, finitionExterieure: FinitionExterieure, finitionInterieure: FinitionInterieure, couverture: Couverture, modele: Modele) {
    this._referenceProduit = referenceProduit;
    this._isolation = isolation;
    this._finitionExterieure = finitionExterieure;
    this._finitionInterieure = finitionInterieure;
    this._couverture = couverture;
    this._modele = modele;
  }

  get referenceProduit(): number {
    return this._referenceProduit;
  }

  set referenceProduit(value: number) {
    this._referenceProduit = value;
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

  get finitionInterieure(): FinitionInterieure {
    return this._finitionInterieure;
  }

  set finitionInterieure(value: FinitionInterieure) {
    this._finitionInterieure = value;
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
