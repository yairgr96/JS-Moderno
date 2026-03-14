"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto); // sella el objeto, no se pueden agregar ni eliminar propiedades, pero sí modificar las existentes

console.log(producto);

console.log(Object.isSealed(producto)); // verifica si el objeto está sellado, devuelve true o false