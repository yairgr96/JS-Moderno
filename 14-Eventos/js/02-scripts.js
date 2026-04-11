const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('click', () => {
    console.log("click en nav");
})

nav.addEventListener('mouseenter', () => {
    console.log("entrando en la navegacion");
})

//mousedown - similar al click
//click
//dbclick = doble click
//mouseup - cuando sueltas el mouse