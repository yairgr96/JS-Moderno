const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {

    // si el footer tiene la clase activo, se la quitamos, de lo contrario se la agregamos
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo'); // quitar la clase activo
        //btnFlotante.classList.remove('activo'); // quitar la clase activo al botón
        this.classList.remove('activo'); // quitar la clase activo al botón
        this.textContent = 'Idioma y Moneda'; // cambiar el texto del botón
    }else {
        footer.classList.add('activo');// agregar la clase activo
       // btnFlotante.classList.add('activo'); // agregar la clase activo al botón
       this.classList.add('activo'); // agregar la clase activo al botón    
       this.textContent = 'Cerrar'; // cambiar el texto del botón
    }
}