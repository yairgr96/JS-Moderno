// insertar HTML

const nuevoEnlace = document.createElement('A'); // Crear un nuevo enlace
nuevoEnlace.textContent = 'Tienda Virtual'; // Agregar el texto
nuevoEnlace.href = '#';// Agregar la clase


// Seleeccionar la navegación
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children); // Ver los hijos de la navegación
navegacion.insertBefore(nuevoEnlace, navegacion.children[1]); // Agregar el nuevo enlace a la navegación en la posición deseada


// Crear una card de forma dinámica

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto'; // Agregar el texto al párrafo
parrafo1.classList.add('categoria', 'concierto'); // Agregar clases al párrafo

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'; // Agregar el texto al párrafo
parrafo2.classList.add('titulo'); // Agregar clases al párrafo

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';  
parrafo3.classList.add('precio'); // Agregar clases al párrafo

// Crear un div con la clase de card
const info = document.createElement('div');
info.classList.add('info'); // Agregar la clase al div

// Agregar los párrafos al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
// Agregar la imagen al div
info.appendChild(imagen);
//crear imagen  
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid'); // Agregar clase a la imagen
imagen.alt = 'Texto alternativo'; // Agregar texto alternativo a la imagen

//crear el cards
const card = document.createElement('div');
card.classList.add('card'); // Agregar clase al div

//asignar img
card.appendChild(imagen);
//asignar info
card.appendChild(info);

// Agregar la card al HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // Agregar la card al contenedor

