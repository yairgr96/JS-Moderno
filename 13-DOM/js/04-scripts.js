// query selectors
// Seleccionar elementos por su clase, etiqueta o cualquier selector CSS

const card = document.querySelector('.card'); // Devuelve el primer elemento que coincida con el selector '.card'
console.log(card);

// Podemos seleccionar cualquier elemento con un selector CSS
const info = document.querySelector('.premium .info'); // Devuelve el primer elemento que coincida con el selector '.premium .info'
console.log(info);

// Seleccionar id
const formulario = document.querySelector('#formulario'); // Devuelve el primer elemento que coincida con el selector '#formulario'
console.log(formulario);

// Sellecionar elemento HTML
const navegacion = document.querySelector('nav'); // Devuelve el primer elemento que coincida con el selector 'nav'
console.log(navegacion);    