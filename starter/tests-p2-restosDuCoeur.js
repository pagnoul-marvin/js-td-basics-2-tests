/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/


const nomClient = prompt('Ecrivez vortre prénom');
const nbreArticles = Number(prompt('Combien d\'articles voulez-vous ?'));
const prix = nbreArticles * 5;
const remise = prix - ((prix * 10) / 100);
const remise2 = remise - ((remise * 10) / 100);
const remiseSup = (remise * 10) / 100;

if ((prix > 25) && (remise > 5) && (remiseSup <= 2)) {
    console.log(`${nomClient} a acheté ${nbreArticles} articles au prix de ${prix} euros (remise de 10% = ${remise})
    Le magasin offre 10% de votre remise (= ${remise2}) aux Restos Du Coeur : ${remiseSup} euros (max 2 euros)`);
}
else if ((prix > 25) && (remise > 5) && (remiseSup > 2)) {
    console.log(`${nomClient} a acheté ${nbreArticles} articles au prix de ${prix} euros (remise de 10% = ${remise})
    Le magasin offre 10% de votre remise (= ${remise2}) aux Restos Du Coeur : ${remiseSup} euros (max 2 euros) mais uniquement deux euros car faut pas déconner :)`);
}
else {
    console.log(`${nomClient} a acheté ${nbreArticles} article(s) au prix de ${prix} euros`);
}




