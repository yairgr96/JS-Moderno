const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log("Pausando..."),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),
    borrarPlaylist: nombre => console.log(`Borrando la playlist ${nombre}`)
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Rock");
reproductor.borrarPlaylist("Rock");