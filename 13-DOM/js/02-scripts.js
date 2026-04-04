// Selector de elementos por su clase

const header = document.getElementsByClassName('header'); // Devuelve una colección de elementos con la clase 'header'
console.log(header);

const hero = document.getElementsByClassName('hero'); // Devuelve una colección de elementos con la clase 'hero'
console.log(hero);

// Si las clases se repiten
const contenedor = document.getElementsByClassName('contenedor'); // Devuelve una colección de elementos con la clase 'contenedor'
console.log(contenedor);

// Si no existe la clase
const noExiste = document.getElementsByClassName('no-existe'); // Devuelve una colección vacía si no existe la clase
console.log(noExiste);