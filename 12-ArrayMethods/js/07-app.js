// como unir 2 arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const meses3 = meses.concat(meses2);
console.log(meses3);

// con spread operator
const meses4 = [...meses, ...meses2];
console.log(meses4);