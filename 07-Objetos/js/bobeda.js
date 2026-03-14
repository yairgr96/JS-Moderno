const configuracion = {
    usuario: 'pumas',
    password: '123456',
    servidor: 'localhost'
}

Object.freeze(configuracion);

configuracion.usuario = 'pumas123';
configuracion.puerto = 8080;
console.log(configuracion);