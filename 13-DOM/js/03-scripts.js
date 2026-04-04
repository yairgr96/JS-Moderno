// Seleccionar elemento por su id

const formulario = document.getElementById('formulario'); // Devuelve el elemento con el id 'formulario';   
console.log(formulario);

//No existe el id
const noExiste = document.getElementById('no-existe'); // Devuelve null si no existe el id
console.log(noExiste);  