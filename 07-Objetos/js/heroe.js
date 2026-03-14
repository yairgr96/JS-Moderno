const personaje = {
    nombre: 'Tony Stark',
    clase: 'Vengador',
    nivel: 99,
    puntosDeVida: 1000
}

personaje.arma = 'Traje de  hierro';

delete personaje.clase;

console.log(personaje);