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
import {Composant} from "../../models/composant.model";
import {FamilleComposant} from "../../models/familleComposant.model";

@Injectable()
export class GlobalProvider {

  public clients : Array<Client>;
  public projets : Array<Projet>;
  public modeles : Array<Modele>;
  public modeles2 : Array<Modele>;
  public modeles3 : Array<Modele>;
  public gammes : Array<Gamme>;
  public employe : Employe;
  public tva : number;
  public margeCommerciale : number;
  public margeEntreprise : number;

  constructor() {

    this.tva = 20;
    this.margeCommerciale = 2;
    this.margeEntreprise = 5;

    //Construction Metier
    let metier = new Metier(1,'Commercial');

    //Construction Emploeye
    let employe = new Employe(12345678,'azerty','Chabat','Alexandre','18 rue des lilas','Brest','29200','chabatalexandre@gmail.com','0630784939','01/01/1995','26/02/2018 18:00',metier);

    //Construction FamilleComposant
    let familleComposant = new FamilleComposant(1,'Chassis');
    let familleComposant2 = new FamilleComposant(2,'Panneaux');
    let familleComposant3 = new FamilleComposant(3,'Couvertures');
    let familleComposant4 = new FamilleComposant(4,'Montants');
    let familleComposant5 = new FamilleComposant(5,'Poutres');
    let familleComposant6 = new FamilleComposant(6,'Planchers');

    //Construction Composant
    let composant = new Composant(1,10,'Chassis bois',familleComposant);
    let composant2 = new Composant(2,40,'Panneaux intermédiaires',familleComposant2);
    let composant3 = new Composant(3,50,'Panneaux d\'isolation',familleComposant2);
    let composant4 = new Composant(4,50,'Panneaux pare-pluie',familleComposant2);
    let composant5 = new Composant(5,15,'Montants bois',familleComposant4);
    let composant6 = new Composant(6,45,'Couverture tuiles',familleComposant3);
    let composant7 = new Composant(7,150,'Poutre bois',familleComposant5);
    let composant8 = new Composant(8,10,'Planchers bois',familleComposant6);

    //Construction Module
    let module1 = new Module(1,"Murs extérieurs", 10000, 4);
    module1.addComposant(composant);
    module1.addComposant(composant2);
    module1.addComposant(composant3);
    module1.addComposant(composant4);

    let module2 = new Module(2,"Couverture", 18000, 1);
    module2.addComposant(composant5);
    module2.addComposant(composant6);
    module2.addComposant(composant7);
    module2.addComposant(composant2);

    let module3 = new Module(3,"Plancher sur dalle", 15000, 2);
    module3.addComposant(composant);
    module3.addComposant(composant2);
    module3.addComposant(composant8);

    let module4 = new Module(4,"Plancher porteur", 15000, 2);
    module4.addComposant(composant);
    module4.addComposant(composant2);
    module4.addComposant(composant8);

    let module5 = new Module(5,"Murs interiéurs", 3000, 6);
    module5.addComposant(composant);
    module5.addComposant(composant2);

    //Construction Modele
    this.modeles = [];
    let modele1 = new Modele(1,'modele1.jpg','3 Chambres','Modèle 3 chambres');
    modele1.addModule(module5);
    modele1.addModule(module1);
    modele1.addModule(module2);
    modele1.addModule(module3);

    let modele2 = new Modele(2,'modele2.jpg','3 Chambres 1 étage','Modèle 3 chambres 1 étage');
    modele1.addModule(module5);
    modele2.addModule(module1);
    modele2.addModule(module2);
    modele2.addModule(module3);
    modele2.addModule(module4);

    let modele6 = new Modele(6,'modele3.jpg','1 Chambre','Modèle 1 chambre');
    modele6.addModule(module1);
    modele6.addModule(module2);
    modele6.addModule(module3);

    this.modeles.push(modele1);
    this.modeles.push(modele2);
    this.modeles.push(modele6);

    this.modeles2 = [];
    let modele3 = new Modele(3,'modele1.jpg','3 Chambres','Modèle 3 chambres');
    modele3.addModule(module5);
    modele3.addModule(module1);
    modele3.addModule(module2);
    modele3.addModule(module3);

    let modele4 = new Modele(4,'modele2.jpg','2 Chambres','Modèle 2 chambres');
    modele4.addModule(module5);
    modele4.addModule(module1);
    modele4.addModule(module2);
    modele4.addModule(module3);

    this.modeles2.push(modele3);
    this.modeles2.push(modele4);

    this.modeles3 = [];
    let modele5 = new Modele(5,'modele2.jpg','3 Chambres 1 étage','Modèle 3 chambres 1 étage');
    modele5.addModule(module5);
    modele5.addModule(module1);
    modele5.addModule(module2);
    modele5.addModule(module3);
    modele5.addModule(module4);

    this.modeles3.push(modele5);

    //Construction Gamme
    this.gammes = [];
    let gamme1 = new Gamme(1,'','Gamme Forest','Style forestier',this.modeles);
    let gamme2 = new Gamme(2,'','Gamme Mountain','Maison jurassienne',this.modeles2);
    let gamme3 = new Gamme(3,'','Gamme Classique','Style classique',this.modeles3);

    this.gammes.push(gamme1);
    this.gammes.push(gamme2);
    this.gammes.push(gamme3);

    //Construction Produit
    let produits1 : Array<Produit>;
    let produits2 : Array<Produit>;

    produits1 = [];
    let produit1 = new Produit(Isolation.Naturelle,FinitionExterieure.Crepis,Couverture.Tuile,modele1);
    produits1.push(produit1);
    let produit2 = new Produit(Isolation.Synthetique,FinitionExterieure.Bois,Couverture.Ardoise,modele1);
    produits1.push(produit2);

    produits2 = [];
    let produit3 = new Produit(Isolation.Naturelle,FinitionExterieure.Bois,Couverture.Ardoise,modele1);
    produits2.push(produit3);
    let produit4 = new Produit(Isolation.Synthetique,FinitionExterieure.Bois,Couverture.Ardoise,modele1);
    produits2.push(produit4);

    //Construction Projet
    this.projets = [];
    let projet1 = new Projet(1,'Maison bois Quimper','19 rue des lilas 29000 Quimper','25/12/2018',employe,EtapeProjet.A_LA_SIGNATURE,EtatDevis.ACCEPTE,produits1);
    this.projets.push(projet1);

    let projet2 = new Projet(2,'Maison 3 chambres Brest Alain','20 rue siam 29200 Brest','10/12/2018',employe,EtapeProjet.ACHEVEMENT_DES_FONDATIONS,EtatDevis.BROUILLON,produits1);
    this.projets.push(projet2);

    let projet3 = new Projet(3,'Maison 1 étage Plougastel','32 theodore botrel 29470 Plougastel','25/05/2018',employe,EtapeProjet.ACHEVEMENT_DES_TRAVAUX_DEQUIPEMENT,EtatDevis.EN_ATTENTE,produits2);
    this.projets.push(projet3);

    let projet4 = new Projet(4,'Maison 2 chambres Brest Alain','54 rue du 6E RIC 29200 Brest','25/06/2018',employe,EtapeProjet.MISE_HORS_DEAU_HORS_DAIR,EtatDevis.EN_FACTURATION,produits2);
    this.projets.push(projet4);

    let projet5 = new Projet(5,'Maison rue Victor Hugo','24 rue Victor Hugo 29200 Brest','25/09/2018',employe,EtapeProjet.OBTENTION_DU_PERMIS_DE_CONSTRUIRE,EtatDevis.EN_COMMANDE,produits2);
    this.projets.push(projet5);

    let projet6 = new Projet(6,'Maiis Quimper Alin','19 rue Thomas Muller 29000 Quimper','25/05/2018',employe,EtapeProjet.REMISE_DES_CLES,EtatDevis.REFUSE,produits1);
    this.projets.push(projet6);

    //Construction Clientd
    this.clients = [];
    let client1 = new Client(1,'Monsieur','Astier','Alain','26 rue de Kergadonna','Brest','29200','astieralain@gmail.com','0612457896','16/06/1974','20/02/2018 18:00',this.projets);
    this.clients.push(client1);

  }
}

