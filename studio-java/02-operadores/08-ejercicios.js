/*
Estamos en la búsqueda de varios artículos de forma online,
lo que haremos será comparar los precios de los artículos entre estas 2 tiendas.
Vamos a realizar la comparación entre los dos precios, necesitamos saber si es que el precio de la tienda "a" es mayor a los de la tienda "b".
Después de analizar esto, puede ser que algún artículo tenga el mismo precio, por lo que compararemos si es el que el precio es igual.

Entradas.
El precio de la tienda “a” será 150.
El precio de la tienda “b” será 130.

Salidas.Al realizar las 2 comparaciones debemos ver en la consola los valores de:
- true , porque 150 si es mayor que el precio de 130.
Posteriormente:
-false, por que el precio de 150 no es igual que 130.
*/


/* 
let comparacion = tiendaA > tiendaB ? 'precio mayor' : 'precio menor';                      //De esta manera lo hice yo, utilizando ternario
console.log(comparacion); 
*/

let tiendaA = 150
let tiendaB = 130
console.log(tiendaA > tiendaB);
console.log(tiendaA === tiendaB)
