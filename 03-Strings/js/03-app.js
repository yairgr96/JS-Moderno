const mensaje = "Estoy aprendiendo Java en Udemy";
// Reemplazar una palabra por otra
const nuevoMensaje = mensaje.replace("Java", "JavaScript");
console.log(nuevoMensaje);

//extraer palabras
console.log("Extraer palabras:", nuevoMensaje.slice(-1, 5));
console.log("Extraer palabras:", nuevoMensaje.substring(-2, 5));