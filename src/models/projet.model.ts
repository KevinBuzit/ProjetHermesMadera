import {Employe} from "./employe.model";
import {EtapeProjet} from "./etapeProjet.model";
import {EtatDevis} from "./etatDevis.model";
import {Produit} from "./produit.model";

export class Projet {

  private _nomProjet: string;
  private _adresseProjet: string;
  private _dateProjet: string;
  private _employe : Employe;
  private _etapeProjet : EtapeProjet;
  private _etatDevis : EtatDevis;
  private _produits : Array<Produit>;
  private _referenceProjet : number;

  constructor(referenceProjet:number, nomProjet: string, adresseProjet: string, dateProjet: string, employe: Employe, etapeProjet: EtapeProjet, etatDevis: EtatDevis, produits : Array<Produit>) {
    this._nomProjet = nomProjet;
    this._adresseProjet = adresseProjet;
    this._dateProjet = dateProjet;
    this._employe = employe;
    this._etapeProjet = etapeProjet;
    this._etatDevis = etatDevis;
    this._produits = produits;
    this._referenceProjet = referenceProjet;
  }

  get referenceProjet(): number {
    return this._referenceProjet;
  }

  set referenceProjet(value: number) {
    this._referenceProjet = value;
  }

  get nomProjet(): string {
    return this._nomProjet;
  }

  set nomProjet(value: string) {
    this._nomProjet = value;
  }

  get adresseProjet(): string {
    return this._adresseProjet;
  }

  set adresseProjet(value: string) {
    this._adresseProjet = value;
  }

  get dateProjet(): string {
    return this._dateProjet;
  }

  set dateProjet(value: string) {
    this._dateProjet = value;
  }

  get employe(): Employe {
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }

  get etapeProjet(): EtapeProjet {
    return this._etapeProjet;
  }

  set etapeProjet(value: EtapeProjet) {
    this._etapeProjet = value;
  }

  get etatDevis(): EtatDevis {
    return this._etatDevis;
  }

  set etatDevis(value: EtatDevis) {
    this._etatDevis = value;
  }
  get produits(): Array<Produit> {
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
}
