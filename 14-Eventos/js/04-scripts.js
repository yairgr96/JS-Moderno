// Eventos de formulario 

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    // Previene el metodo
    e.preventDefault();


    //Tipo de metodo del formulario, en este caso POST
    console.log(e.target.method);

    // Tipo de accion
    console.log(e.target.action);


})