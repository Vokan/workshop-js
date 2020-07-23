var ville =["nante","paris","saint-nazaire","angers","le mans"];


// forEach()
function afficher (element){
    console.log(element);
}
ville.forEach(afficher);

// every()
var villeA =ville.every(element=>element.includes("a"));
console.log("Lettre A dans toutes les villes "+villeA);

//Some()
var villeTiret =ville.some(element=>element.includes("-"));
console.log("Présence de tiret? "+ villeTiret);

//filter()
var villeSansTiretSansEspace=ville.filter(element=>!element.includes(" ")&&!element.includes("-"))
console.log("villeSansTiretSansEspace "+villeSansTiretSansEspace);

// chainer les fonctions


var villeEnMajEtTermineEnS = ville.map(ville=>ville.toUpperCase()).filter(ville=>ville.endsWith("S"));
console.log("En maj et avec un s "+villeEnMajEtTermineEnS);