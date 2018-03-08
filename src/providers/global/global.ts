import { Injectable } from '@angular/core';
import {Projet} from "../../models/projet.model";
import {Client} from "../../models/client.model";
import {Metier} from "../../models/metier.model";
import {Employe} from "../../models/employe.model";
import {EtapeProjet} from "../../models/etapeProjet.model";
import {EtatDevis} from "../../models/etatDevis.model";
import {Modele} from "../../models/modele.model";
import {Gamme} from "../../models/gamme.model";

@Injectable()
export class GlobalProvider {

  public clients : Array<Client>;
  public projets : Array<Projet>;
  public modeles : Array<Modele>;
  public gammes : Array<Gamme>;

  constructor() {

    let metier = new Metier(1,'Commercial');
    let employe = new Employe(1,'test','Employe','Lambda','18 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00',metier);

    this.projets = [];
    let projet1 = new Projet('Maison bois Quimper','19 rue des lilas 29000 Quimper','25/12/2018',2,5,employe,EtapeProjet.A_LA_SIGNATURE,EtatDevis.ACCEPTE);
    this.projets.push(projet1);
    let projet2 = new Projet('Maison bois Brest','20 rue siam 29200 Brest','10/12/2018',2,5,employe,EtapeProjet.ACHEVEMENT_DES_FONDATIONS,EtatDevis.BROUILLON);
    this.projets.push(projet2);
    let projet3 = new Projet('Maison bois Plougastel','32 theodore botrel 29470 Plougastel','25/05/2018',2,5,employe,EtapeProjet.ACHEVEMENT_DES_TRAVAUX_DEQUIPEMENT,EtatDevis.EN_ATTENTE);
    this.projets.push(projet3);
    let projet4 = new Projet('Maison bois Brest','2 rue du 2E RIC 29200 Brest','25/06/2018',2,5,employe,EtapeProjet.MISE_HORS_DEAU_HORS_DAIR,EtatDevis.EN_FACTURATION);
    this.projets.push(projet4);
    let projet5 = new Projet('Maison bois Brest','24 rue Victor Hugo 29200 Brest','25/09/2018',2,5,employe,EtapeProjet.OBTENTION_DU_PERMIS_DE_CONSTRUIRE,EtatDevis.EN_COMMANDE);
    this.projets.push(projet5);
    let projet6 = new Projet('Maison bois Quimper ','19 rue Thomas Muller 29000 Quimper','25/05/2018',2,5,employe,EtapeProjet.REMISE_DES_CLES,EtatDevis.REFUSE);
    this.projets.push(projet6);

    this.clients = [];
    let client1 = new Client(1,'Martins','Marco','19 rue des lilas','Quimper','29000','marcomartins@gmail.com','0612457896','01/01/1994','20/02/2018 18:00',this.projets);
    this.clients.push(client1);

    this.modeles = [];
    let modele1 = new Modele(1,'modele1.jpg','1 Chambre','Modèle 1 chambre');
    this.modeles.push(modele1);

    this.gammes = [];
    let gamme1 = new Gamme(1,'','Gamme 1','Gamme bois',this.modeles);
    this.gammes.push(gamme1);
  }
}
