/*las funciones son bloques fundamentales dentro de la construcciones de apps en Js
estas las vas a utilizar durante toda tu vida como desarrollador de Js, puedes pensar en las funciones como 
si estas fuesen procedimientos o un listado de instrucciones que estas (apps) deben ejecutar.
para nosotros podamos usar funciones debemos usar la palabra de "fuction"*/
/*
function saludar(){
    console.log('Hola mundo');
}
    de esta forma se escribe una funcion que de por si no hace nada para que la funcion
    haga algo debemos llamarla*/

function saludar(){
    console.log('Hola mundo');
}
saludar(); //de esta manera se llama una funcion 

function suma() {
    return 2 + 2; //la palabra return es sumamente importante porque nos va a permitir reutilizar el codigo dentro function
}
//para tomar el valor 2 + 2 de la funcion y usarlo en un futuro se puede hacer de la siguiente manera
/*
let resultado = suma();
console.log(resultado);
*/
//Tambien se puede llamar a la funcion saltando el paso anterior 

console.log(suma());