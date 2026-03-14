const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            largo: '1m'
    },
        fabricacion: {
            pais: 'China'
        }
    }
}

// destructuring anidado
const { informacion: { fabricacion: { pais } } } = producto;
console.log(pais);