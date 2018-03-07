import {Employe} from "./employe.model";
import {EtapeProjet} from "./etapeProjet.model";
import {EtatDevis} from "./etatDevis.model";
import {Client} from "./client.model";

export class Projet {
  private _referenceProjet: number;
  private _nomProjet: string;
  private _adresseProjet: string;
  private _dateProjet: string;
  private _margeCommercialeProjet: number;
  private _margeEntrepriseProjet: number;
  private _employe : Employe;
  private _etapeProjet : EtapeProjet;
  private _etatDevis : EtatDevis;

  constructor(referenceProjet: number, nomProjet: string, adresseProjet: string, dateProjet: string, margeCommercialeProjet: number, margeEntrepriseProjet: number, employe: Employe, etapeProjet: EtapeProjet, etatDevis: EtatDevis) {
    this._referenceProjet = referenceProjet;
    this._nomProjet = nomProjet;
    this._adresseProjet = adresseProjet;
    this._dateProjet = dateProjet;
    this._margeCommercialeProjet = margeCommercialeProjet;
    this._margeEntrepriseProjet = margeEntrepriseProjet;
    this._employe = employe;
    this._etapeProjet = etapeProjet;
    this._etatDevis = etatDevis;
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

  get margeCommercialeProjet(): number {
    return this._margeCommercialeProjet;
  }

  set margeCommercialeProjet(value: number) {
    this._margeCommercialeProjet = value;
  }

  get margeEntrepriseProjet(): number {
    return this._margeEntrepriseProjet;
  }

  set margeEntrepriseProjet(value: number) {
    this._margeEntrepriseProjet = value;
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
}
