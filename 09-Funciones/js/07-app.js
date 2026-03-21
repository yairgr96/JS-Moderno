iniciarApp();

function iniciarApp() {
    console.log("Iniciando app...");
    segundaFuncion();
}


function segundaFuncion() {
    console.log("Desde la segunda función");
    usuarioAutenticado("Juan Pérez");
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando usuario ${usuario}...`);
    console.log(`Usuario ${usuario} autenticado correctamente`);
}