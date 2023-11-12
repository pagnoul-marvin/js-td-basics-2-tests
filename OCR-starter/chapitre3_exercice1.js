// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/

const currentDay = 'Lundi';

let nextDay;

if (currentDay === "Lundi") {
    nextDay = "Mardi";
}
else if (currentDay === "Mardi") {
    nextDay = "Mercredi";
}
else if (currentDay === "Mercredi") {
    nextDay = "Jeudi";
}
else if (currentDay === "Jeudi") {
    nextDay = "Vendredi";
}
else if (currentDay === "Vendredi") {
    nextDay = "Samedi";
}
else if (currentDay === "Samedi") {
    nextDay = "Dimanche";
}
else {
    console.log('Error : Jour non reconnu');
}

if (currentDay) {
    console.log(`Demain nous serons ${nextDay}`);
}





