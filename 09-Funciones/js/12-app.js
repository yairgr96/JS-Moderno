const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Mouse', precio: 25},
    {nombre: 'Audifonos', precio: 200}, 
];


const nuevoArreglo = carrito.map( producto=>`${producto.nombre} - Precio: ${producto.precio}`);
console.log(nuevoArreglo);

carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));