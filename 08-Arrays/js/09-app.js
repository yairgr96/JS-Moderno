const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50} 
];


carrito.forEach( function(producto) {
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
});


