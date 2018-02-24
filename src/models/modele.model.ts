import {Gamme} from "./gamme.model";
import {Module} from "./module.model";
export class Modele {
  private _referenceModele: number;
  private _urlImageModele: string;
  private _designationModele: string;
  private _descriptionModele: string;
  private _gamme : Gamme;
  private _modules: Array<Module> = [];

  constructor(referenceModele: number, urlImageModele: string, designationModele: string, descriptionModele: string, gamme: Gamme) {
    this._referenceModele = referenceModele;
    this._urlImageModele = urlImageModele;
    this._designationModele = designationModele;
    this._descriptionModele = descriptionModele;
    this._gamme = gamme;
  }

  addModule(module:Module){
    this._modules.push(module);
  }

  get modules(): Array<Module> {
    return this._modules;
  }

  set modules(value: Array<Module>) {
    this._modules = value;
  }

  get designationModele(): string {
    return this._designationModele;
  }

  set designationModele(value: string) {
    this._designationModele = value;
  }

  get gamme(): Gamme {
    return this._gamme;
  }

  set gamme(value: Gamme) {
    this._gamme = value;
  }

  get referenceModele(): number {
    return this._referenceModele;
  }

  set referenceModele(value: number) {
    this._referenceModele = value;
  }

  get urlImageModele(): string {
    return this._urlImageModele;
  }

  set urlImageModele(value: string) {
    this._urlImageModele = value;
  }

  get descriptionModele(): string {
    return this._descriptionModele;
  }

  set descriptionModele(value: string) {
    this._descriptionModele = value;
  }
}
