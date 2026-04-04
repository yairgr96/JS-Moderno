// query selector all
// Devuelve todos los elementos que coincidan con el selector '.card'
const cards = document.querySelectorAll('.card');
console.log(cards);


// Si no existe ningún elemento que coincida con el selector, devuelve un NodeList vacío
const noExiste = document.querySelectorAll('.no-existe');
console.log(noExiste);