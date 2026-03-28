/* for (let i = 0; i < 10; i++) {

    if (i === 5) {
        console.log('Este es el numero 5');
        break; // Esto detiene el ciclo
    }
    console.log(`El valor de i es: ${i}`);
}

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        console.log('Este es el numero 5');
        continue; // Esto detiene la iteracion actual y pasa a la siguiente
    }
    console.log(`El valor de i es: ${i}`);
} 
 */

// Recorrer un arreglo y aplicar una condicion
const carrito = [
    { nombre: 'Monitor 32 pulgadas', precio: 400 },
    { nombre: 'Celular', precio: 800, descuento: true },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Audifonos', precio: 100 }
];

// Recorrer un arreglo y aplicar una condicion
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) { // Si el producto tiene descuento
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue; // Salta al siguiente producto
    }
    console.log(carrito[i]);
}

