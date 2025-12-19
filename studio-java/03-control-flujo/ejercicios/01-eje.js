/* ¿Cómo funciona?
Nuestro sistema solo aceptará aquellas imágenes que pesen menos de 5 MB
Tenemos que determinar si es que todas las imágenes que ha pasado el usuario son menores o iguales altamaño máximo permitido por nuestro servidor.
Si esto no es así, le notificaremos al usuario que el archivo ha excedido el tamaño máximo.
Entradas.
Definiremos 2 variables, una para el tamaño del archivo y otra para el tamaño máximo permitido de nuestro sistema.
Salidas.
Imprimemos el texto: "El archivo cumple con el tamaño permitido." Si es que pesa menos  o  igual de 5 MB,
o : "El archivo ha excedido el tamaño máximo permitido." si es que pesa mas de este tamaño.
 */

let max = 5;
let imagen = 6;

if (imagen <= max) {
    console.log('El archivo cumple con el tamaño permitido.');
} else if (imagen > max) {
    console.log('El archivo ha excedido el tamaño máximo permitido.');
}