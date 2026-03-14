const pedido = {
    id: 1045,
    producto: "Teclado Mecánico",
    precio: 1500,
    direccion: {
        ciudad: "Guadalajara",
        codigoPostal: "44100"
    }
}

const { producto, precio, direccion: { ciudad} } = pedido;
console.log(producto);
console.log(precio);
console.log(ciudad); 