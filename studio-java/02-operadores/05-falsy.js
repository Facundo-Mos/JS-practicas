/*
los operadores logicos pueden ser utilizados para hacer operaciones de SHORT-CIRCUIT (corto circuito)

*/

/*
es importante saber que valores evalua en falso
*/
//falso
//false
//0
//''                            todos estos valores son conocidos como FALSY
//null
//undefined
//NaN


let nombre = 'Facu';
let username = nombre || 'anonimo'; //   OR = ||
console.log(username);



/* 
    si por alguna razon nosotros necesitamos escribir una logica pero por alguna razon necesitamos
    que alguna logica anterior haya respuesto True en ese caso nosotros haremos uso del operador AND
*/
function fn1 () {
    console.log('soy funcion 1');
    return false;
}
function fn2 () {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();