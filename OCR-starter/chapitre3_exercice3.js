// Seconde suivante

/*
- Stockez dans trois variables
    * l'heure actuelle
    * les minutes actuelles
    * les secondes actuelles
- … (TODO)
*/

const currentDay = new Date();
console.log(`${currentDay}`);
const hours = currentDay.getHours();
console.log(`${hours}`);
const min = currentDay.getMinutes();
console.log(`${min}`);
const sec = currentDay.getSeconds();
console.log(`${sec}`);
