const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo("JavaScript");

// Función de tipo flecha con retorno implícito
const aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2("Python"));

// Función de tipo flecha con retorno implícito y un solo parámetro, 
// se pueden omitir los paréntesis
const aprendiendo3 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo3("Java"));