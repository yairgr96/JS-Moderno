// Traverse the DOM

//const navegacion = document.querySelector('.navegacion');
//console.log(navegacion);
//console.log(navegacion.childNodes); // Devuelve todos los nodos hijos, incluyendo los espacios en blanco y los saltos de línea como nodos de texto.
//console.log(navegacion.children); // Devuelve solo los nodos hijos que son elementos HTML, excluyendo los espacios en blanco y los saltos de línea.}

//console.log(navegacion.children[0].nodeName); // Devuelve el nombre del nodo del primer nodo hijo que es un elemento HTML, en este caso, 'A' para un enlace.
//console.log(navegacion.children[0]); // Devuelve el primer nodo hijo que es un elemento HTML.
//console.log(navegacion.children[0].nodeType); // Devuelve el tipo de nodo del primer nodo hijo que es un elemento HTML, en este caso, 1 para un elemento.

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing'; // Cambia el texto del segundo nodo hijo que es un elemento HTML dentro del elemento con la clase 'card' al nuevo texto 'Nuevo heading desde traversing'.
console.log(card.children[1].children); // Devuelve el segundo nodo hijo que es un elemento HTML dentro del elemento con la clase 'card'.

card.children[0].src = 'img/hacer2.jpg'; // Cambia la fuente de la imagen del primer nodo hijo que es un elemento HTML dentro del elemento con la clase 'card' a 'img/hacer2.jpg'.
console.log(card.children[0]); // Devuelve el primer nodo hijo que es un elemento HTML dentro del elemento con la clase 'card'.


// Trabajando con el padre
console.log(card.parentNode); // Devuelve el nodo padre del elemento con la clase 'card', que es el elemento que lo contiene en el DOM.
console.log(card.parentElement); // Devuelve el elemento padre del elemento con la clase 'card', que es el elemento que lo contiene en el DOM.
console.log(card.parentElement.parentElement); // Devuelve el elemento padre del elemento padre del elemento con la clase 'card', que es el elemento que lo contiene en el DOM.

// Trabajando con los hermanos  
console.log(card.nextElementSibling); // Devuelve el siguiente hermano que es un elemento HTML del elemento con la clase 'card', que es el siguiente elemento que está al mismo nivel en el DOM.
console.log(card.nextElementSibling.nextElementSibling); // Devuelve el siguiente hermano que es un elemento HTML del siguiente hermano que es un elemento HTML del elemento con la clase 'card', que es el siguiente elemento que está al mismo nivel en el DOM después del siguiente hermano.
console.log(card.previousElementSibling); // Devuelve el hermano anterior que es un elemento HTML del elemento con la clase 'card', que es el elemento que está al mismo nivel en el DOM antes del elemento con la clase 'card'.





