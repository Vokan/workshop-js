
var Go =console.log;

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



