/* 
¿Cómo funciona?
Trabajamos en un banco que ofrece préstamos a muchos clientes, algunos de estos tienen una cuenta con nosotros.
Vamos a tener un listado de usuarios de los cuales tendremos que determinar la tasa de interés que les ofreceremos, basado en su puntaje.
Primero tendremos que determinar si es que el usuario tiene una cuenta en nuestro banco, después deberemos determinar la tasa de interés dependiendo de su puntaje de crédito.
Considerando que a nuestros clientes les podremos ofrecer un descuento del 10% en su préstamo, siempre y cuando la tasa no sea menor a 15 %.
Tendremos que determinar, si podemos o no darles un préstamo, y de cuánto será su tasa de interés si esque está aprobado.


Entradas.
Definiremos 3 variables:
•Una para saber si el solicitante tiene cuenta.
•Otra para el puntaje de crédito del solicitante.
•Y una tasa de interés, la cual estará vacía.

Para la evaluación, tendremos 3 tasas: 10% para puntajes de 750 o mayores, 15% para puntajes de entre 749 a 700, y 10% para puntajes de 650 a 699. Si el puntaje es menor que 650, no podremos ofrecerles un crédito


Salidas.
Tendremos que imprimir en la consola cuál será la tasa de interés en caso de aprobarse 
*/

let tieneCuenta = true;
let puntaje = 650;
let tasaInteres;

if (puntaje >= 750) {
    tasaInteres = 10;
} else if (puntaje >= 700) {
    tasaInteres = 15;;
} else if (puntaje >= 650) {
    tasaInteres = 10;
} else if (puntaje < 650) {
    tasaInteres = null;
    console.log("no podemos ofrecerle un credito");
}
if (tasaInteres !== null && tieneCuenta === true && tasaInteres >= 15) {
    tasaInteres *= 0.9;
}
if (tasaInteres!== null) {
    console.log("El prestamo ha sido aceptado");
    console.log("tasa de interes final: " + tasaInteres + "%")
}