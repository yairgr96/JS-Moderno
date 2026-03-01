// Ejercicio 4 - Repetir una cadena de texto
const producto = "Monitor Gamer 24 Pulgadas";
const precio = "250 USD";
const etiqueta = "Oferta ";

const productoMayusculas = producto.toUpperCase();
console.log(productoMayusculas);

const separarPalabras = producto.split(" ");
console.log(separarPalabras);

const repetirEtiqueta = etiqueta.repeat(3);
console.log(repetirEtiqueta);

console.log(`${repetirEtiqueta} el ${producto} - tiene un costo de ${precio}`);