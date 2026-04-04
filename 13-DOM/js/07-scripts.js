// Cambiando estylo de un elemento

/* h1 = document.querySelector('h1');
h1.style.backgroundColor = 'red';
hi1.style.fontFamily = 'Arial';
h1.style.textTransform = 'uppercase'; */

const card = document.querySelector('.card');
card.classList.add('nueva-clase'); // Agrega la clase 'nueva-clase' al elemento con la clase 'card';
card.classList.remove('nueva-clase'); // Elimina la clase 'nueva-clase' del elemento con la clase 'card';