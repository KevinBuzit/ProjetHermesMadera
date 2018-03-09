import {FamilleComposant} from "./familleComposant.model";
export class Composant {
  private _referenceComposant: number;
  private _prixHTComposant: number;
  private _designationComposant: string;
  private _familleComposant:FamilleComposant;

  constructor(referenceComposant: number, prixHTComposant: number, designationComposant: string, familleComposant: FamilleComposant) {
    this._referenceComposant = referenceComposant;
    this._prixHTComposant = prixHTComposant;
    this._designationComposant = designationComposant;
    this._familleComposant = familleComposant;
  }

  get referenceComposant(): number {
    return this._referenceComposant;
  }

  set referenceComposant(value: number) {
    this._referenceComposant = value;
  }

  get prixHTComposant(): number {
    return this._prixHTComposant;
  }

  set prixHTComposant(value: number) {
    this._prixHTComposant = value;
  }

  get designationComposant(): string {
    return this._designationComposant;
  }

  set designationComposant(value: string) {
    this._designationComposant = value;
  }

  get familleComposant(): FamilleComposant {
    return this._familleComposant;
  }

  set familleComposant(value: FamilleComposant) {
    this._familleComposant = value;
  }
}
