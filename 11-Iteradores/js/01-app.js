/* for (let i = 0; i < 10; i++) {
    console.log(`El valor de i es: ${i}`);
} */

/* for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`el numero es par: ${i}`);
    } else {
        console.log(`el numero es impar: ${i}`);
    }
}    */

const carrito = [
    { nombre: 'Monitor 32 pulgadas', precio: 400 },
    { nombre: 'Celular', precio: 800 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Audifonos', precio: 100 }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
