/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

const point1John = 89;
const point2John = 120;
const point3John = 103;

const point1Mike = 116;
const point2Mike = 94;
const point3Mike = 123;

let moyenJohn = (point1John + point2John + point3John) /3; //104
let moyenMike = (point1Mike + point2Mike + point3Mike) /3; //111

if (moyenJohn > moyenMike) {
    console.log(`L'équipe de John gagne avec ${moyenJohn} points`);
}
else {
    console.log(`L'équipe de Mike gagne avec ${moyenMike} points`);
}


moyenJohn = 128;
moyenMike = 100;
if (moyenJohn > moyenMike) {
    console.log(`L'équipe de John gagne avec ${moyenJohn} points`);
}
else if (moyenJohn === moyenMike) {
    console.log(`L'équipe de Mike et de John sont ex-aequo avec ${moyenJohn} points`);
}
else {
    console.log(`L'équipe de Mike gagne avec ${moyenMike} points`);
}


const point1Mary = 97;
const point2Mary = 134;
const point3Mary = 105;

let moyenMary = (point1Mary + point2Mary + point3Mary) /3; //112

moyenJohn = 104;
moyenMike = 111;

if ((moyenMary > moyenJohn) && (moyenMary > moyenMike)) {
    console.log(`L'équipe de Mary gagne avec ${moyenMary} points`);
}
else if ((moyenJohn > moyenMike) && (moyenJohn > moyenMary)) {
    console.log(`L'équipe de John gagne avec ${moyenJohn} points`);
}
else if ((moyenJohn === moyenMike) && (moyenJohn === moyenMary)) {
    console.log(`L'équipe de John, Mike et de Mary sont ex-aequo avec ${moyenMary} points`);
}
else {
    console.log(`L'équipe de Mike gagne avec ${moyenMike} points`);
}


moyenMike = 100;
moyenMary = 100;
moyenJohn = 100;

if ((moyenMary > moyenJohn) && (moyenMary > moyenMike)) {
    console.log(`L'équipe de Mary gagne avec ${moyenMary} points`);
}
else if ((moyenJohn > moyenMike) && (moyenJohn > moyenMary)) {
    console.log(`L'équipe de John gagne avec ${moyenJohn} points`);
}
else if ((moyenJohn === moyenMike) && (moyenJohn === moyenMary)) {
    console.log(`L'équipe de John, Mike et de Mary sont ex-aequo avec ${moyenMary} points`);
}
else {
    console.log(`L'équipe de Mike gagne avec ${moyenMike} points`);
}
