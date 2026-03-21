const carrito = [];

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

carrito.push(producto);
console.table(carrito);

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

carrito.push(producto2);
console.table(carrito);

const producto3 = {     
    nombre: 'Teclado',
    precio: 50
}   

carrito.unshift(producto3); // Agrega al inicio del arreglo
console.table(carrito); 

// Eliminar el último elemento del arreglo
carrito.pop();
console.table(carrito);

//Eliminar el primer elemento del arreglo
carrito.shift();
console.table(carrito);