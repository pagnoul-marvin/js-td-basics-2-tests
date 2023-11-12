/*
TESTS - PRÉPA 6 : Date valide
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
*/

/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/

let jour = parseInt(prompt("Entrez le jour"));
let mois = parseInt(prompt("Entrez le mois"));
let annee = parseInt(prompt("Entrez le année"));
let isValid = true;

do {
      jour = parseInt(prompt('Entrez le jour'));
      mois = parseInt(prompt('Entrez le mois'));
      annee = parseInt(prompt('Entrez le année'));
    if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
        isValid = false;
    }
    if (jour < 1 || jour > 31) {
        isValid = false;
    }
    if (mois < 1 || mois > 12) {
        isValid = false;
    }
    if (annee < 1) {
        isValid = false;
    }

    let isBissextile = false;

    if (((annee % 4 === 0) && (!annee % 100 === 0)) || annee % 400 === 0) {
        isBissextile = true;
    }

    switch (mois) {
        case 2 :
            if (isBissextile) {
                if (jour > 29) {
                    isValid = false;
                }
            } else {
                if (jour > 28) {
                    isValid = false;
                }
            }
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            if (jour > 30) {
                isValid = false;
            }
    }
} while (isValid === false);




//LIGNE DE ROUTE
//isNAN() is not a number
//jour entre 1 et 31
//mois entre 1 et 12
//année sup à 1

//vérifier si 30 ou 31 jours (28,29 pour février (année bissextile))




/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	 - traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	 - puis traiter les cas où ce sera 30 ;
	 - dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour pour retourner true ou fasle
  selon que la date est valide ou pas.
  */
  