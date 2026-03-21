// Parametros por defecto en funciones
function saludar(nombre = 'Usuario', apellido = 'Apellido') {
    console.log(`Hola ${nombre} ${apellido}, bienvenido al curso de JavaScript Moderno`);
}

saludar("Juan", "Pérez");
saludar("María", "Gómez");
saludar(); // Utiliza los valores por defecto