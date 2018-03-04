import { Injectable } from '@angular/core';
import {Projet} from "../../models/projet.model";
import {Client} from "../../models/client.model";
import {Metier} from "../../models/metier.model";
import {Employe} from "../../models/employe.model";
import {EtapeProjet} from "../../models/etapeProjet.model";
import {EtatDevis} from "../../models/etatDevis.model";

@Injectable()
export class GlobalProvider {

  public clients : Array<Client>;
  public projets : Array<Projet>;

  constructor() {
    this.clients = [];
    let client1 = new Client(1,'Client','Test','17 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00');
    this.clients.push(client1);

    let metier = new Metier(1,'Commercial');
    let employe = new Employe(1,'test','Employe','Lambda','18 rue des lilas','Brest','29000','xxxxxxxx@gmail.com','0000000000','01/01/1995','26/02/2018 18:00',metier);

    this.projets = [];
    let projet1 = new Projet(1,'Maison bois','19 rue des lilas 29000 Brest','25/12/2018',2,5,employe,EtapeProjet.A_LA_SIGNATURE,EtatDevis.ACCEPTE,client1);
    this.projets.push(projet1);
  }
}