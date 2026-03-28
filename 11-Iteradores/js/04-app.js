// while se ejecuta mientras la condicion sea verdadera

/* let i = 0; // inicializacion

while (i < 10) {// condicion
    console.log(`El valor de i es: ${i}`);
    i++; // incremento
} */

// NUmeros pares y  nones

let i = 0;

while (i < 100) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
    i++;
}