const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

meses[0] = 'Enero Modificado';
meses[10] = 'Diciembre'; // Esto no es recomendable

console.table(meses);