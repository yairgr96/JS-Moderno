function iniciarApp() {
    console.log('Iniciando App...');
    autenticarUsuario('Yair')
}

function autenticarUsuario(nombre) {  
    console.log(`Autenticando Usuario: ${nombre}`);
    cargarDashboard();
}   

function cargarDashboard() {
    console.log('Cargando Dashboard...');
}

iniciarApp();