/* para crear una funcion constructora basta solo crear una funcion, el nombre que se le dara es el recurso
que queremos que este cree ej si queremos que cree usuarios function Usurio() aclarqacion para este tipo de funciones se ecribe con
mayuscula la primera letra
 */

// { id: 1, recuperarClave: function(){}}
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { //cuando tenemos una propiedad ej "recuperarClave" y se le asigna una funcion se denomina METODO
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario(); /* no solo tenemos que llamar a la funcion para que cree el usuario
tambien debemos usar new */ 
//NEW
/* cuando usamos new ocurren 4 cosas 
1) se crea un objeto literal del aire
2) se vincula el PROTOTIPO de la funcion con el objeto que se acaba de crear (en este caso Usuario)
3) despues el objeto creado en el aire en el caso 1 se le asigna a la palabra reservada de this
4) si la funcion no retorna absolutamente nada como en este caso lo que hace es que retorna de manera automatica "this" */

console.log(usuario);