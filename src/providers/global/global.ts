import { Injectable } from '@angular/core';
import {Projet} from "../../models/projet.model";
import {Client} from "../../models/client.model";
import {Metier} from "../../models/metier.model";
import {Employe} from "../../models/employe.model";
import {EtapeProjet} from "../../models/etapeProjet.model";
import {EtatDevis} from "../../models/etatDevis.model";
import {Modele} from "../../models/modele.model";
import {Gamme} from "../../models/gamme.model";
import {Produit} from "../../models/produit.model";
import {Isolation} from "../../models/isolation.model";
import {FinitionExterieure} from "../../models/finitionExterieure.model";
import {Couverture} from "../../models/couverture.model";
import {Module} from "../../models/module.model";

@Injectable()
export class GlobalProvider {

  public clients : Array<Client>;
  public projets : Array<Projet>;
  public modeles : Array<Modele>;
  public gammes : Array<Gamme>;
  public employe : Employe;

  constructor() {

    let metier = new Metier(1,'Commercial');
    let employe = new Employe(1,'test','Employe','Lambda','18 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00',metier);

    let module1 = new Module(1,"Mur", 10000);
    let module2 = new Module(2,"toit", 15000);
    this.modeles = [];
    let modele1 = new Modele(1,'modele1.jpg','1 Chambre','Modèle 1 chambre');
    modele1.addModule(module1);
    modele1.addModule(module2);
    this.modeles.push(modele1);

    this.gammes = [];
    let gamme1 = new Gamme(1,'','Gamme 1','Gamme bois',this.modeles);
    this.gammes.push(gamme1);

    let produits1 : Array<Produit>;
    let produits2 : Array<Produit>;
    produits1 = [];
    let produit1 = new Produit(Isolation.Naturelle,FinitionExterieure.Crepis,Couverture.Tuile,modele1);
    produits1.push(produit1);
    let produit2 = new Produit(Isolation.Synthetique,FinitionExterieure.Bois,Couverture.Ardoise,modele1);

    produits2 = [];
    let produit3 = new Produit(Isolation.Naturelle,FinitionExterieure.Bois,Couverture.Ardoise,modele1);
    produits2.push(produit3);
    let produit4 = new Produit(Isolation.Synthetique,FinitionExterieure.Bois,Couverture.Ardoise,modele1);

    this.projets = [];
    let projet1 = new Projet('Maison bois Quimper','19 rue des lilas 29000 Quimper','25/12/2018',2,5,employe,EtapeProjet.A_LA_SIGNATURE,EtatDevis.ACCEPTE,produits1);
    this.projets.push(projet1);

    produits1.push(produit2);

    let projet2 = new Projet('Maison bois Brest','20 rue siam 29200 Brest','10/12/2018',2,5,employe,EtapeProjet.ACHEVEMENT_DES_FONDATIONS,EtatDevis.BROUILLON,produits1);
    this.projets.push(projet2);
    let projet3 = new Projet('Maison bois Plougastel','32 theodore botrel 29470 Plougastel','25/05/2018',2,5,employe,EtapeProjet.ACHEVEMENT_DES_TRAVAUX_DEQUIPEMENT,EtatDevis.EN_ATTENTE,produits2);
    this.projets.push(projet3);
    produits2.push(produit4);

    let projet4 = new Projet('Maison bois Brest','2 rue du 2E RIC 29200 Brest','25/06/2018',2,5,employe,EtapeProjet.MISE_HORS_DEAU_HORS_DAIR,EtatDevis.EN_FACTURATION,produits2);
    this.projets.push(projet4);
    let projet5 = new Projet('Maison bois Brest','24 rue Victor Hugo 29200 Brest','25/09/2018',2,5,employe,EtapeProjet.OBTENTION_DU_PERMIS_DE_CONSTRUIRE,EtatDevis.EN_COMMANDE,produits2);
    this.projets.push(projet5);
    let projet6 = new Projet('Maison bois Quimper ','19 rue Thomas Muller 29000 Quimper','25/05/2018',2,5,employe,EtapeProjet.REMISE_DES_CLES,EtatDevis.REFUSE,produits1);
    this.projets.push(projet6);

    this.clients = [];
    let client1 = new Client(1,'Monsieur','Martins','Marco','19 rue des lilas','Quimper','29000','marcomartins@gmail.com','0612457896','01/01/1994','20/02/2018 18:00',this.projets);
    this.clients.push(client1);

  }
}
