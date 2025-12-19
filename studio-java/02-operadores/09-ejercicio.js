/*
Vamos a tener varios usuarios a los cuales tenemos que darles o denegarles el acceso para poder realizar cambios a  nuestros archivos de código.
Tendremos 3 roles: usuario, moderador, y propietario.
De estos usuarios, solo vamos a permitirle hacerle modificaciones a los archivos a los usuarios que tiene los roles de moderador o propietario.
Por lo que tendremos que saber si es que un usuario tiene alguno de estos roles. Y regresar el valor de true si es que tiene algunos de estos 3 roles. Vamos a evaluar a los 3 tipos de usuarios

Entradas.
Definiremos 3 usuarios, cada uno con uno de los roles, los cuales son:  “moderador”, “usuario”, y “propietario”.
Y realizaremos 3 veces la evaluación para saber si es que este usuario tiene permisos, una por cada usuario.

Salidas.
Al realizar las 3 comparaciones debemos ver en la consola los valores de:
- true
- false
- true
*/


let usuario1 = "moderador";
let usuario2 = "usuario";
let usuario3 = "propietario";

let evaUsario1 =
    usuario1 === "moderador" || usuario1 === "propietario";
let evaUsario2 =
    usuario2 === "moderador" || usuario2 === "propietario";
let evaUsario3 =
    usuario3 === "moderador" || usuario3 === "propietario";


console.log(evaUsario1);
console.log(evaUsario2);
console.log(evaUsario3);