
var Go =console.log;

Go("TP3");
Go(" ");
function Personne (nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function (){
        return "le nom complet est : " +this.nom +" "+ this.prenom +" pseudo => " + this.pseudo;
    }
}

    // Objets
    var jules = new Personne("LEMAIRE","Jules","jules77");
    var paul = new Personne("LEMAIRE","Paul","paul44");
    
    Go(jules.nom);
    Go(jules.prenom);
    Go(jules.pseudo);
    Go(jules.getNomComplet());
    Go(paul.getNomComplet());

    function afficherPersonne (personne){
        Go(personne.nom);
        Go(personne.prenom);
        Go(personne.pseudo);
        Go(personne.getNomComplet());
    }
    afficherPersonne(paul);

    // modification du pseudo.
    jules.pseudo ="jules44";

    afficherPersonne(jules);

    //ajout de la propriété age dans l'objet jules.
    Go(jules.age);
    Personne.prototype.age="NON RENSEIGNE";
    Go(jules.age);
    jules.age="30";
    Go(jules.age);

    //Ajouter une méthode à Personne.
    Personne.prototype.getInitiales =function(){
        var iniNom = this.nom.charAt(0);
        var iniPrenom = this.prenom.charAt(0);
        return iniNom+" "+iniPrenom
    }
    //afficherPersonne(jules.getInitiales()); //pk ne marche pas ?
    Go(jules.getInitiales());

    // Objet sans constructeur. --> notation littérale dans le cours 

    var robert ={
        prenom :"Robert",
        nom :"LEPREFET",
        pseudo :"robert77",
        getNomComplet : function (){
            return "le nom complet est : " +this.nom +" "+ this.prenom +" pseudo => " + this.pseudo;
    }
}
    //Go(robert.getNomComplet()); 
    afficherPersonne(robert);
