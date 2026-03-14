// Objet literal 
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Objet Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Televisión', 500);
console.log(producto2);

const producto3 = new Producto('Tablet', 200);
console.log(producto3);