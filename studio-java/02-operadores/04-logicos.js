/*
los operadores logicos en Js son 3
AND, OR, NOT
*/
/*
AND se puede utilizar usando && y se usa de la siguiente manera
*/



/*
por el conjunto de estos valos obtendremos otro valor un true o false. Si es que 
lo que se encuentra a la izquierda  es true y lo que se encuentra a la derecha tambien entonces
obtendremos un true, pero si alguno de estos es falso obtendremos false
El ejemplo mas normal es si es mayor de edad y esta suscripto a netflix, si cumple las dos es true
y puede mirar la pelicula pero si no cumple con una de esas dos o las dos, no podra hacerlo
console.log(true && true); 
console.log(false && true);
*/

let mayor = false;
let suscripto = true
console.log('operador and', mayor && suscripto);

//OR se utiliza usando || (alt gr 1 para hacer las barras) 

/*
en este caso la unica forma para obtener un false es que los dos sean false, si uno de los dos es verdadero
obtendra un true
*/

console.log('operador or', mayor || suscripto);



//NOT el utiliza usando ! antes de la variable

console.log('operador NOT', !mayor);
/*
en este caso se invierten los valores si !mayor es true obtendras un false e viceversa
*/
let soloCatalogoInfantil = !mayor;