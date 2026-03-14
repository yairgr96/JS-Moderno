const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen: 'imagen.jpg'
}

// Agregar nuevas propiedades a un objeto
producto.categoria = 'Computadoras';

// eliminar propiedades de un objeto
delete producto.disponible;

console.log(producto);
