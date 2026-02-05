/* 
¿Cómo funciona?En los molinos de café en grano normalmente podemos hacer una selección de cuantas tasas necesitaremos, 
para esto vamos primero a verificar que nuestro usuario tenga el contenedor de café molido, 
y enseguida vamos a verificar cuál ha sido la selección del usuario y dependiendo a eso vamos a determinar cuando tiempo 
tiene que funcionar el molino para entregarle al usuario la cantidad correcta

Entradas.
Vamos a definir 3 variables:
•Una para saber si el molino tiene el contenedor.
•El número de tazas que necesitamos.
•Y una constante que tendrá el tiempo de segundos en que tiene que funcionar el molino por taza.

Salidas.
Si el molino no tiene el contenedor, tendremos que imprimir el mensaje de error que nos dirá que no se puede encender el contenedor. 
Adicionalmente, si el número de tazas es menor o igual a 0, tendremos que imprimir que no se ha seleccionado un número de tazas 
para realizar el proceso.Por el contrario, imprimiremos que es está iniciando el proceso, 
para posteriormente imprimir el número de tazas y tiempo que tomará. */

let tieneContenedor = true;
let numTazas = 2;
let tiempoTazas = 5;

if (!tieneContenedor) {
    console.log("No contiene cafe");
} else if (numTazas <= 0) {
    console.log("no se ha selecionado el numero de tazas correcto");
} else {
    console.log("el cafe se esta preparando y estara listo en " + (numTazas * tiempoTazas) + " segundos");
}