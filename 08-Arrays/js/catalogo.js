const carrito = [100, 250, 500, 1200];

// Iterar precio con descuento con map
const carritoDescuento = carrito.map((precio) => {
  return precio - precio * 0.90;
});

console.log(`Carrito con descuento aplicado: ${carritoDescuento}`);