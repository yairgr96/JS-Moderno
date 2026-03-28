const pendientes = ['tarea 1', 'tarea 2', 'tarea 3', 'tarea 4', 'tarea 5'];

for (let pendiente in pendientes) {
    console.log(pendiente);
}


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

// for in
// itera sobre objetos
for (let producto in carrito) {
    console.log(producto);
}   