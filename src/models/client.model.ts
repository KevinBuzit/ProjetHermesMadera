export class Client {
  private _referenceClient: number;
  private _nomClient: string;
  private _prenomClient: string;
  private _adresseRueClient: string;
  private _adresseVilleClient: string;
  private _codePostalClient: string;
  private _mailClient: string;
  private _telephoneClient: string;
  private _dateNaissanceClient: string;
  private _dateCreationClient: string;

  constructor(referenceClient: number, nomClient: string, prenomClient: string, adresseRueClient: string, adresseVilleClient: string, codePostalClient: string, mailClient: string, telephoneClient: string, dateNaissanceClient: string, dateCreationClient: string) {
    this._referenceClient = referenceClient;
    this._nomClient = nomClient;
    this._prenomClient = prenomClient;
    this._adresseRueClient = adresseRueClient;
    this._adresseVilleClient = adresseVilleClient;
    this._codePostalClient = codePostalClient;
    this._mailClient = mailClient;
    this._telephoneClient = telephoneClient;
    this._dateNaissanceClient = dateNaissanceClient;
    this._dateCreationClient = dateCreationClient;
  }

  get referenceClient(): number {
    return this._referenceClient;
  }

  set referenceClient(value: number) {
    this._referenceClient = value;
  }

  get nomClient(): string {
    return this._nomClient;
  }

  set nomClient(value: string) {
    this._nomClient = value;
  }

  get prenomClient(): string {
    return this._prenomClient;
  }

  set prenomClient(value: string) {
    this._prenomClient = value;
  }

  get adresseRueClient(): string {
    return this._adresseRueClient;
  }

  set adresseRueClient(value: string) {
    this._adresseRueClient = value;
  }

  get adresseVilleClient(): string {
    return this._adresseVilleClient;
  }

  set adresseVilleClient(value: string) {
    this._adresseVilleClient = value;
  }

  get codePostalClient(): string {
    return this._codePostalClient;
  }

  set codePostalClient(value: string) {
    this._codePostalClient = value;
  }

  get mailClient(): string {
    return this._mailClient;
  }

  set mailClient(value: string) {
    this._mailClient = value;
  }

  get telephoneClient(): string {
    return this._telephoneClient;
  }

  set telephoneClient(value: string) {
    this._telephoneClient = value;
  }

  get dateNaissanceClient(): string {
    return this._dateNaissanceClient;
  }

  set dateNaissanceClient(value: string) {
    this._dateNaissanceClient = value;
  }

  get dateCreationClient(): string {
    return this._dateCreationClient;
  }

  set dateCreationClient(value: string) {
    this._dateCreationClient = value;
  }
}
