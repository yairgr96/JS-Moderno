const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log("Pausando...");
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    },
    borrarPlaylist: function(nombre) {
        console.log(`Borrando la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Rock");
reproductor.borrarPlaylist("Rock");