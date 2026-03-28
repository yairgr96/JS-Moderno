//for each
const pendientes = ['tarea 1', 'tarea 2', 'tarea 3', 'tarea 4', 'tarea 5'];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    {
        nombre: 'monitor',
        precio: 500
    },
    {

        nombre: 'teclado',
        precio: 100
    },
    {
        nombre: 'mouse',
        precio: 50
    }
];
/* for each no crea un nuevo arreglo */
const nuevoArreglo = carrito.forEach(producto => console.log(`${producto.nombre} : ${producto.precio}`));
console.log(nuevoArreglo);

/* map crea un nuevo arreglo */
const nuevoArreglo2 = carrito.map(producto => (`${producto.nombre} : ${producto.precio}`));
console.log(nuevoArreglo2);