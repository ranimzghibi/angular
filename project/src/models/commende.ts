export class Commande {
    public nom: string;
    public prenom: string;
    public tel: string;
    public quantite: number;
    public id : number;
  
    constructor(nom: string, prenom: string, tel: string, quantite: number) {
      this.nom = nom;
      this.prenom = prenom;
      this.tel = tel;
      this.quantite = quantite;
      
    }
  }
  