console.log('01 -Fonctions');

var nombre1 = 10;
var nombre2 = 20;

//Définition d'une fonction
function additionner(nb1,nb2){
    return nb1 + nb2;
}

var resultat1= additionner(nombre1,nombre2);

console.log("resultat1= ", resultat1);


// variable de type fonction
// Question 1
var somme = additionner;

var resultat2 = somme(nombre1,nombre2);

console.log("resultat2= ", resultat2);

// Question 2

function multiplication (nb1,nb2){
    return nb1*nb2;
}
var resultat3 = multiplication(nombre1,nombre2);

console.log("resultat3=",resultat3);

// fonction pour éléments du 1er ordre


var afficherOperation = function (monOperation, operation, nb1, nb2 ){
    return monOperation +"("+nb1+"," +nb2+")= " + operation(nb1,nb2);
}

console.log(afficherOperation("somme",somme,20,40));

console.log(afficherOperation("multiplication",multiplication,10,20));

function soustraction(nb1,nb2){
    return nb1-nb2;
}

console.log(afficherOperation("soustraction",soustraction,15,5));
