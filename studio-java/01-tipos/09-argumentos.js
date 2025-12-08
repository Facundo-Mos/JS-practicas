/*
si queremos hacer una funcion mas flexible existe una funcionalidad en Js que podemos 
utilizar estos son los argumentos y los parametros
function suma() {
    return 2 + 2;
}
el PARAMETRO va adentro de los parentesis en el siguiente caso es la letra "a"
que en el segundo caso es modificado por el argumento "5"



function suma(a) {
    return a + 2;
}
suma(5);
let resultado = suma(5);
console.log(resultado);


las funciones pueden recibir multiples argumentos y tambien multiples parametros
*/

function suma(a, b) {
    console.log(arguments); //esto sirve para ver todos los argumentos en la consola pero no es recomendado usarlos
    return a + b;
}
suma(5);
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);