/* Ejercicio 3: pava eléctrica.
Tendrás que generar el sistema de control de una pava eléctrica / hervidor eléctricode agua / tetera eléctrica.
Este ejercicio tendrá varios pasos con varias evaluaciones
Este código va a determinar si es que el agua está hirviendo. La temperatura en la que la pava se apagará, 
será cuando llegue a los 100 grados. Además, esta no encenderá si es que no tiene agua.
Primero, verificaremos que la pava tenga agua. Si la pava no tiene agua, 
imprimimos un mensaje en el que no tiene agua, y no puede encender.
Pero si tiene agua, vamos a cambiar el estado de encendido a true, e imprimiremos un mensaje de 
que hemos encendido la pava
Lo siguiente es que mediante un loop, imprimiremos el valor de la temperatura, 
y vamos a sumar en cada iteración 25 a la temperatura.
Cuando se haya alcanzado la temperatura máxima, vamos a cambiar el estado de encendido a false.
E imprimiremos que la pava tiene agua caliente y el valor de la temperatura.

Entradas.
Tenemos que definir 3 variables: 
Una para saber si la pava tiene agua, la pava eléctrica, la cual será un boolean que iniciará en true.
Una más que será si la pava está encendida, que iniciará en false.
Y otra que será la temperatura que será un number e iniciará en 0.

Salidas.
Tendremos que ver los mensajes, uno por cada una de las evaluaciones:
La pava está encendida
Calentando agua... la temperatura es de: 0 grados
Calentando agua... la temperatura es de: 25 grados
Calentando agua... la temperatura es de: 50 grados
Calentando agua... la temperatura es de: 75 grados
La temperatura de la pava ha llegado al máximo, la pava se apagará.
Ahora tienes agua caliente a 100 grados
Pero si no se tiene agua en la pava, solo tendremos que ver un mensaje:
La pava no tiene agua, no puede encender */

let agua = true;
let encendida = false;
let t = 0;

while (t >= 100) {
    if (agua === false) {
    console.log('agregue agua a la pava');
} else if (agua === true) {
    encendida = true;
    console.log('La pava a sido encendida correctamente');
} else if (agua === true && encendida === true) {
    console.log('El agua se esta calentando');
}
}
