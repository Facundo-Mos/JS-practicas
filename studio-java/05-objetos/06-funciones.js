/* las funciones en Js tambien son objetos y estos se consideran objetos de primera clase
esto quiere decir que las funciones pueden ser asignadas a otras variables, pasadas como argumentos 
a otras funciones o tambien retornadas de otras funciones y ademas estas tambien tienen propiedades */

function Usuario(nombre) {
    this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Federico');

console.log(user);