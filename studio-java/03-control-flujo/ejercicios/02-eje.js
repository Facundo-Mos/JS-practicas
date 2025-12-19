/*
¿Cómo funciona?
Trabajaremos en el registro de nuestros usuarios en nuestra aplicación, lo que necesitaremos será no
permitir que creen su cuenta con una contraseña insegura, por lo que, si es que la contraseña tiene
menos de 12 caracteres, no les permitiremos crear su cuenta.

Entradas.
Crearemos una variable que tendrá nuestra contraseña con una longitud menor a 12 caracteres.
Otra variable que contendrá el número de caracteres mínimos que le pediremos a los usuarios.
Como siguiente, haremos la evaluación e imprimiremos el mensaje correspondiente en la consola.

Salidas.
Al realizar la comparación debemos ver en la consola el mensaje dependiendo si la longitud de la
contraseña es menor , o igual o mayor que la longitud definida.
*/








let pasword = '123456789012'; //importante poner el numero como stringa
let userPasword = "muchosdigitos";


//Aqui podemos comparar la cantidad de caracteres
if (userPasword.length >= pasword.length ) {
    console.log('Contraseña segura');
} else {
    console.log('Su contraseña no contiene la cantidad de digitos necesarios');
}


//.length
/* 
La propiedad .length es una de las herramientas más básicas y utilizadas en JavaScript. Su función principal es decirte cuántos elementos tiene un objeto (normalmente un String o un Array) 
*/