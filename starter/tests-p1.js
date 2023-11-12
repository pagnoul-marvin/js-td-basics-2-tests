/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

const nomClient = prompt('Ecrivez votre prénom');
const nbreArticle = Number(prompt('Ecrivez le nombre d\'articles que vous voulez'));
const prix = nbreArticle * 15;
const prixRistourne = prix - ((prix * 10) / 100);

if (nbreArticle >= 20) {
    console.log(`${nomClient} a acheté ${nbreArticle} articles au prix de ${prixRistourne} euros`);
}
else {
    console.log(`${nomClient} a acheté ${nbreArticle} article(s) au prix de ${prix} euros`);
}



