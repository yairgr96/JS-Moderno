const dinero = 500;
const totalPagar = 500; 
const tarjeta = true;

if(dinero >= totalPagar) {
    console.log('Puedes pagar');
}else if(tarjeta) {
    console.log('Puedes pagar con tarjeta');
}else {
    console.log('No tienes suficiente dinero');
}