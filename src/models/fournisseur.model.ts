export class Fournisseur {
  private _idFournisseur: number;
  private _numeroSiretFournisseur: string;
  private _raisonSocialeFournisseur: string;

  constructor(idFournisseur: number, numeroSiretFournisseur: string, raisonSocialeFournisseur: string) {
    this._idFournisseur = idFournisseur;
    this._numeroSiretFournisseur = numeroSiretFournisseur;
    this._raisonSocialeFournisseur = raisonSocialeFournisseur;
  }

  get idFournisseur(): number {
    return this._idFournisseur;
  }

  set idFournisseur(value: number) {
    this._idFournisseur = value;
  }

  get numeroSiretFournisseur(): string {
    return this._numeroSiretFournisseur;
  }

  set numeroSiretFournisseur(value: string) {
    this._numeroSiretFournisseur = value;
  }

  get raisonSocialeFournisseur(): string {
    return this._raisonSocialeFournisseur;
  }

  set raisonSocialeFournisseur(value: string) {
    this._raisonSocialeFournisseur = value;
  }
}
