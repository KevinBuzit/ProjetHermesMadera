export class FamilleComposant {
  private _idFamilleComposant: number;
  private _libelleFamilleComposant: string;

  constructor(idFamilleComposant: number, libelleFamilleComposant: string) {
    this._idFamilleComposant = idFamilleComposant;
    this._libelleFamilleComposant = libelleFamilleComposant;
  }

  get idFamilleComposant(): number {
    return this._idFamilleComposant;
  }

  set idFamilleComposant(value: number) {
    this._idFamilleComposant = value;
  }

  get libelleFamilleComposant(): string {
    return this._libelleFamilleComposant;
  }

  set libelleFamilleComposant(value: string) {
    this._libelleFamilleComposant = value;
  }
}
