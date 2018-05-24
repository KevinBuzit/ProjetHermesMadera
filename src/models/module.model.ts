import {Composant} from "./composant.model";

export class Module {
  private _referenceModule: number;
  private _designationModule: string;
  private _prixHTModule: number;
  private _quantite: number;
  private _composants: Array<Composant> = [];

  constructor(referenceModule: number, designationModule: string, prixHTModule: number, quantite: number) {
    this._referenceModule = referenceModule;
    this._designationModule = designationModule;
    this._prixHTModule = prixHTModule;
    this._quantite = quantite;
  }

  addComposant(composant:Composant){
    this._composants.push(composant);
  }

  get quantite(): number {
    return this._quantite;
  }

  set quantite(value: number) {
    this._quantite = value;
  }

  get referenceModule(): number {
    return this._referenceModule;
  }

  set referenceModule(value: number) {
    this._referenceModule = value;
  }

  get designationModule(): string {
    return this._designationModule;
  }

  set designationModule(value: string) {
    this._designationModule = value;
  }

  get prixHTModule(): number {
    return this._prixHTModule;
  }

  set prixHTModule(value: number) {
    this._prixHTModule = value;
  }

  get composants(): Array<Composant> {
    return this._composants;
  }

  set composants(value: Array<Composant>) {
    this._composants = value;
  }
}
