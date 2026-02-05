/*las factory function nos permiten a nosotros crear objetos de una manera simple y no
repetitiva*/

/* let user = {
    id: 1,
    email: 'facu@internet.com',
    name: 'facu',
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
}; */
/* let user1 = {
    id: 2,
    email: 'tomas@internet.com',
    name: 'tomas',
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
}; */

function crearUsuario(name, email) {
    return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
};
}

let user1 = crearUsuario('Facu', 'facu@internet.com');
let user2 = crearUsuario('Tomas', 'tomas@internet.com');
console.log(user1, user2);

/* de esta forma es como nosotros hemos creado dos objetos que tienen la misma estructura sin repetir el procedimiento
pero si necesitamos que sus valores cambien le podemos pasar los valores de las propiedades como argumentos a las funciones*/
