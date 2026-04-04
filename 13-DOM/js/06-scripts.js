// Modificar texto e  imagenes
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

const nuevoEncabezado = 'Nuevo encabezado desde JavaScript';
document.querySelector('.contenido-hero h1').textContent = nuevoEncabezado;


//document.querySelector('.contenido-hero h1').textContent = 'Nuevo encabezado desde JavaScript';

// Modificar imagenes
const imagen = document.querySelector('.card img');
console.log(imagen);        
imagen.src = 'img/hacer2.jpg';