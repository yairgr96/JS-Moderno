const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

/* const { nombre } = producto; 
console.log(nombre);
console.log(precio);
console.log(disponible) */;


// Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];
const [primero, segundo] = numeros;
console.log(primero);
console.log(segundo);

const numeros2 = [10, 20, 30, 40, 50];
const [primero2, ...tercero] = numeros2;
console.log(primero2);
console.log(tercero);