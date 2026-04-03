const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 400 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// every, retorna true si todos los elementos cumplen la condicion
const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);

// some, retorna true si al menos un elemento cumple la condicion
const resultado2 = carrito.some(producto => producto.precio < 1000);
console.log(resultado2);