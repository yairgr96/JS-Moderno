const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostarInfo: function() {
        console.log(`El producto es: ${this.nombre} y su precio es: ${this.precio}`);
    }
}

producto.mostarInfo();
