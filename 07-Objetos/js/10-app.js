const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);  
console.log(medidas);   

const resultado = Object.assign(producto, medidas); // une dos objetos en uno solo, el primer objeto se modifica con las propiedades del segundo
console.log(resultado); // muestra el objeto resultado, que es el mismo que producto pero con las propiedades de medidas

// Spread operator
const resultado2 = { ...producto, ...medidas }; // une dos objetos en uno solo, el primer objeto se modifica con las propiedades del segundo, pero no modifica el primer objeto
console.log(resultado2); // muestra el objeto resultado2, que es un nuevo objeto con las propiedades de producto y medidas