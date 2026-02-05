/* en Js los objetos son dinamicos esto quiere decir que puedes quitar o agregar propiedades a 
tu antojo y ademas le puedes cambiar su valor en cualquier momento*/


const user = { id: 1};  //al ser un constante no se puede modificar el valor de este


//pero si se le puede agregar valores de la siguiente manera
user.name = 'Facundo';              //en este caso agregamos el nombre
user.guardar = function () {
    console.log('Guardando', user.name);
}
user.guardar();

delete user.name;           //aqui procedemos a borrar los datos agregados 
delete user.guardar;
console.log(user);

/*cuando tenemos una variable con la palabra reservada de const no podemos cambiarle el valor a
esta misma variable pero si es que el valor que nosotros le asignamos es un objeto si podemos cambiarle el valor
a las propiedades de este objeto o tambien podemos agregarle mas propiedades o tambien quitarle dichas 
propiedades, lo que no podemos hacer es que deje de ser un objeto.
si por alguna razon nosotros quueremos que no se pueda modificar este objeto debemos utilizar

object.freeze({}) 

este hara que no se pueda modificar un objeto que ha sido creado ej */

const user1 = Object.freeze({id: 1});
user1.name = 'Facu';
console.log(user1);         //no agregara el name, y no señalara error 


// si queremos modificar los valores que ya tiene pero no queremos que se le quiten valores o se le agreguen debemos usar "seal" ej:

const user2 = Object.seal({id: 1});
user2.name = 'Facu';
user2.id = 2                                //sigue siendo un objeto pero pude modificarle el id (valor)
console.log(user2);