// Crear un playlist de música utilizando un array
let playlist = ["Bohemian Rhapsody", "Hotel California"];

// Agregar una canción al  final del playlist
playlist.push("Shape of You");

// Agregar una canción al inicio del playlist
playlist.unshift("Blinding Lights");

// Usuario elimina la última canción del playlist
playlist.pop(); // shape of you

// Imprimir el playlist actualizado
console.log(playlist);