/* Program to create a translator */

let myMap = new Map();
myMap.set('Book', 'Libro');
myMap.set('Country', 'País');
myMap.set('Home', 'Hogar');
myMap.set('Business', 'Negocio');
myMap.set('School', 'Escuela');
myMap.set('World', 'Mundo');
myMap.set('Water', 'Agua');
myMap.set('Year', 'Año');
myMap.set('Government', 'Gobierno');
myMap.set('Family', 'Familia');

let input = prompt("Enter the word you would like to translate: ");

let value = myMap.get(input);
console.log(value);