export class Metier {
  private _idMetier: number;
  private _libelleMetier: string;

  constructor(idMetier: number, libelleMetier: string) {
    this._idMetier = idMetier;
    this._libelleMetier = libelleMetier;
  }

  get idMetier(): number {
    return this._idMetier;
  }

  set idMetier(value: number) {
    this._idMetier = value;
  }

  get libelleMetier(): string {
    return this._libelleMetier;
  }

  set libelleMetier(value: string) {
    this._libelleMetier = value;
  }
}
