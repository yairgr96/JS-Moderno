const correoOriginal = "    JUAN.PABLO@CORREO.COM    ";

// 1 y 2. Limpieza y formato (Encadenando métodos)
const correoProcesado = correoOriginal.trim().toLowerCase();
console.log("Correo procesado:", correoProcesado);

// 3. Longitud
console.log("Caracteres:", correoProcesado.length);

// 4 y 5. Validaciones
console.log("¿Es válido (tiene @)?:", correoProcesado.includes('@'));
console.log("Posición del dominio (.com):", correoProcesado.indexOf('.com'));