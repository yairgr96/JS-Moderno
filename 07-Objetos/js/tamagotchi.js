const mascota = {
    nombre: "Tamagotchi",
    tipo: "Perro",
    hambre: true,
    alimentar: function alimentar() {
        this.hambre = false;
        console.log(`Alimentando a ${this.nombre}.`);
    }  
}  

console.log(mascota.alimentar());
console.log(mascota);


