function sumar(a, b) {
    return a + b;
}   

let resultado = sumar(2, 3);
console.log(resultado);

// Ejemplo mas complejo

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 0.15;
}   
total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(100);    

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es: ${totalPagar+total}`);
