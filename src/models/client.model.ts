import {Projet} from "./projet.model";

export class Client {
  private _referenceClient: number;
  private _genreClient: string;
  private _nomClient: string;
  private _prenomClient: string;
  private _adresseRueClient: string;
  private _adresseVilleClient: string;
  private _codePostalClient: string;
  private _mailClient: string;
  private _telephoneClient: string;
  private _dateNaissanceClient: string;
  private _dateCreationClient: string;
  private _projets : Array<Projet>;

  constructor(referenceClient: number, genreClient: string, nomClient: string, prenomClient: string, adresseRueClient: string, adresseVilleClient: string, codePostalClient: string, mailClient: string, telephoneClient: string, dateNaissanceClient: string, dateCreationClient: string, projets : Array<Projet>) {
    this._referenceClient = referenceClient;
    this._genreClient = genreClient;
    this._nomClient = nomClient;
    this._prenomClient = prenomClient;
    this._adresseRueClient = adresseRueClient;
    this._adresseVilleClient = adresseVilleClient;
    this._codePostalClient = codePostalClient;
    this._mailClient = mailClient;
    this._telephoneClient = telephoneClient;
    this._dateNaissanceClient = dateNaissanceClient;
    this._dateCreationClient = dateCreationClient;
    this._projets = projets;
  }

  get referenceClient(): number {
    return this._referenceClient;
  }

  set referenceClient(value: number) {
    this._referenceClient = value;
  }
  get genreClient(): string {
    return this._genreClient;
  }

  set genreClient(value: string) {
    this._genreClient = value;
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
  get projets(): Array<Projet> {
    return this._projets;
  }

  set projets(value:  Array<Projet>) {
    this._projets = value;
  }
}
