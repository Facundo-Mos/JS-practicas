/*
la instruccion de for in nos sirve para que nosotros podamos iterar las propiedades de un
objeto, y por uqe querriamos hacer esto? porque podria ser que no conozcamos las propiedades
de dicho objeto ya que ests podrian ser asignadas en el tiempo de ejecucion de tu aplicacion
*/
let user = {
    id: 1,
    name: 'Facundo',
    age: 26,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}
/* haciendo esto podesmos pedirle a la consola que nos diga las propiedades una por una con su 
respectivo objeto ej "id 1" */ 








//para acceder a un elemento de un array es mejor hacerlo con for of, pero es posible ver esto
let animales = [ 'leon', 'dragos', 'perro'];
for (let indice in animales) {
    console.log(indice, animales [indice]);
}