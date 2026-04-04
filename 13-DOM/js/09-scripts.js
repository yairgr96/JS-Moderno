// Eliminar elementos del DOM

// Eliminar un elemento del DOM
/* const primerEnlace = document.querySelector('a');
primerEnlace.remove(); */


// Eliminar un elemento del DOM a través de su padre

const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[2]);