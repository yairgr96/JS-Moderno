let elemento;

elemento = document; // Devuelve el documento completo
elemento = document.all; // Devuelve una colección de todos los elementos del documento
elemento = document.head; // Devuelve el elemento <head>
elemento = document.body; // Devuelve el elemento <body>
elemento = document.domain; // Devuelve el dominio del documento
elemento = document.forms[0]; // Devuelve el primer formulario del documento
elemento = document.forms[0].id; // Devuelve el id del primer formulario
elemento = document.forms[0].method; // Devuelve el método del primer formulario
elemento = document.forms[0].classList; // Devuelve una colección de todas las clases del primer formulario
elemento = document.forms[0].action; // Devuelve la acción del primer formulario

elemento = document.links; // Devuelve una colección de todos los enlaces del documento
elemento = document.links[4]; // Devuelve el quinto enlace del documento
elemento = document.links[4].classList; // Devuelve una colección de todas las clases del quinto enlace
elemento = document.links[4].className; // Devuelve el nombre de la clase del quinto enlace

elemento = document.images; // Devuelve una colección de todas las imágenes del documento

elemento = document.scripts; // Devuelve una colección de todos los scripts del documento

console.log(elemento);