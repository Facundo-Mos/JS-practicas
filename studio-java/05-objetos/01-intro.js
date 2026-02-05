/* let email = 'facu@internet.com';
let name = 'facu';
let direccion = {
    calle: 'via Sofia',
    numero: '3',
}; */

/* En este momentos tenemos 3 variables declaradas, como podemos ver estas tres variables estan relacionadas
en este caso son datos de un usuario, por lo que nosotros podemos usar los objetos para agrupar
los datos todos dentro de un mismo objeto para que sea mas facil trabajar con ellos*/


                        //Programacion orientada a objetos (P.O.O.)

let user = {
    email: 'facu@internet.com',
    name: 'facu',
    direccion: {                        //como se puede ver hay un objeto "direccion" dentro de otro objeto "user"
        calle: 'via Sofia',
        numero: '3',
    },
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...');
    },
};