"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto); // congela el objeto, no se pueden modificar sus propiedades ni eliminar


console.log(producto);

console.log(Object.isFrozen(producto)); // verifica si el objeto está congelado, devuelve true o false