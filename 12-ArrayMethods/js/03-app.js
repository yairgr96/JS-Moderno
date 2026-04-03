//reduce, es un metodo que se utiliza para reducir un arreglo a un solo valor

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un for each
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

// con reduce
const totalReduce = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(totalReduce);   