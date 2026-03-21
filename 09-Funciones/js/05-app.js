function sumar(a, b) { // a y b son parámetros de la función
    console.log(a + b);
}

sumar(2, 3); // 2 y 3 son argumentos que se pasan a la función, 
// se asignan a los parámetros a y b respectivamente
sumar(5, 10);
sumar(100, 200);

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}, bienvenido al curso de JavaScript Moderno`);
}

saludar("Juan", "Pérez");
saludar("María", "Gómez");