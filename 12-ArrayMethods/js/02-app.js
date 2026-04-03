// findIndex, retorna la posicion de un elemento en el arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

// findIndex, retorna la posicion de un elemento en un arreglo de objetos
const indiceCarrito = carrito.findIndex(producto => producto.nombre === 'Tablet');
console.log(indiceCarrito);