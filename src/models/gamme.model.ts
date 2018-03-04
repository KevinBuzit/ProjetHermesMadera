import {Modele} from "./modele.model";
export class Gamme {

  private _referenceGamme: number;
  private _urlImageGamme: string;
  private _designationGamme: string;
  private _descriptionGamme: string;
  private _modeles: Array<Modele>;

  constructor(referenceGamme: number, urlImageGamme: string, designationGamme: string, descriptionGamme: string, modeles: Array<Modele>) {
    this._referenceGamme = referenceGamme;
    this._urlImageGamme = urlImageGamme;
    this._designationGamme = designationGamme;
    this._descriptionGamme = descriptionGamme;
    this._modeles = modeles;
  }

  get modeles(): Array<Modele> {
    return this._modeles;
  }

  set modeles(value: Array<Modele>) {
    this._modeles = value;
  }

  get designationGamme(): string {
    return this._designationGamme;
  }

  set designationGamme(value: string) {
    this._designationGamme = value;
  }

  get referenceGamme(): number {
    return this._referenceGamme;
  }

  set referenceGamme(value: number) {
    this._referenceGamme = value;
  }

  get urlImageGamme(): string {
    return this._urlImageGamme;
  }

  set urlImageGamme(value: string) {
    this._urlImageGamme = value;
  }

  get descriptionGamme(): string {
    return this._descriptionGamme;
  }

  set descriptionGamme(value: string) {
    this._descriptionGamme = value;
  }
}
