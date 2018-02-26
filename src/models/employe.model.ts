import {Metier} from "./metier.model";

export class Employe {
  private _matriculeEmploye: number;
  private _motDePasseEmploye: string;
  private _nomEmploye: string;
  private _prenomEmploye: string;
  private _adresseRueEmploye: string;
  private _adresseVilleEmploye: string;
  private _codePostalEmploye: string;
  private _mailEmploye: string;
  private _telephoneEmploye: string;
  private _dateNaissanceEmploye: string;
  private _dateDeCreationEmploye: string;
  private _metier: Metier;

  constructor(matriculeEmploye: number, motDePasseEmploye: string, nomEmploye: string, prenomEmploye: string, adresseRueEmploye: string, adresseVilleEmploye: string, codePostalEmploye: string, mailEmploye: string, telephoneEmploye: string, dateNaissanceEmploye: string, dateDeCreationEmploye: string, metier: Metier) {
    this._matriculeEmploye = matriculeEmploye;
    this._motDePasseEmploye = motDePasseEmploye;
    this._nomEmploye = nomEmploye;
    this._prenomEmploye = prenomEmploye;
    this._adresseRueEmploye = adresseRueEmploye;
    this._adresseVilleEmploye = adresseVilleEmploye;
    this._codePostalEmploye = codePostalEmploye;
    this._mailEmploye = mailEmploye;
    this._telephoneEmploye = telephoneEmploye;
    this._dateNaissanceEmploye = dateNaissanceEmploye;
    this._dateDeCreationEmploye = dateDeCreationEmploye;
    this._metier = metier;
  }

  get matriculeEmploye(): number {
    return this._matriculeEmploye;
  }

  set matriculeEmploye(value: number) {
    this._matriculeEmploye = value;
  }

  get motDePasseEmploye(): string {
    return this._motDePasseEmploye;
  }

  set motDePasseEmploye(value: string) {
    this._motDePasseEmploye = value;
  }

  get nomEmploye(): string {
    return this._nomEmploye;
  }

  set nomEmploye(value: string) {
    this._nomEmploye = value;
  }

  get prenomEmploye(): string {
    return this._prenomEmploye;
  }

  set prenomEmploye(value: string) {
    this._prenomEmploye = value;
  }

  get adresseRueEmploye(): string {
    return this._adresseRueEmploye;
  }

  set adresseRueEmploye(value: string) {
    this._adresseRueEmploye = value;
  }

  get adresseVilleEmploye(): string {
    return this._adresseVilleEmploye;
  }

  set adresseVilleEmploye(value: string) {
    this._adresseVilleEmploye = value;
  }

  get codePostalEmploye(): string {
    return this._codePostalEmploye;
  }

  set codePostalEmploye(value: string) {
    this._codePostalEmploye = value;
  }

  get mailEmploye(): string {
    return this._mailEmploye;
  }

  set mailEmploye(value: string) {
    this._mailEmploye = value;
  }

  get telephoneEmploye(): string {
    return this._telephoneEmploye;
  }

  set telephoneEmploye(value: string) {
    this._telephoneEmploye = value;
  }

  get dateNaissanceEmploye(): string {
    return this._dateNaissanceEmploye;
  }

  set dateNaissanceEmploye(value: string) {
    this._dateNaissanceEmploye = value;
  }

  get dateDeCreationEmploye(): string {
    return this._dateDeCreationEmploye;
  }

  set dateDeCreationEmploye(value: string) {
    this._dateDeCreationEmploye = value;
  }

  get metier(): Metier {
    return this._metier;
  }

  set metier(value: Metier) {
    this._metier = value;
  }
}
