//Eventos de teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {

    // e = evento | target = en que elemento | value = capturar las letras del teclado y mostrar en consola 
    console.log(e.target.value);
})