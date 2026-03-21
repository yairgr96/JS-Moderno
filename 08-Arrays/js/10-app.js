const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50} 
];


// La diferencia entre forEach y map es que forEach no retorna nada, mientras que map retorna un nuevo arreglo con los resultados de la función aplicada a cada elemento del 
// arreglo original.
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);