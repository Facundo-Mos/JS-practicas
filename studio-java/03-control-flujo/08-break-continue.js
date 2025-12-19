/*
en este caaso se demuestra como frenar un loop, se puede hacer con todos
break: Rompe el bucle por completo. Sale de la estructura y continúa con el código que esté debajo del bucle.
continue: Salta la iteración actual. Detiene lo que estaba haciendo en esa "vuelta", pero vuelve arriba 
para evaluar la condición y seguir con la siguiente.
*/

//break
let i = 1;

while (i <= 10) {
    if (i === 5) {
    console.log("¡Encontrado el 5! Detenemos el bucle.");
    break; // Aquí el bucle muere por completo
}
    console.log("Revisando número: " + i);
    i++;
}
// El código sigue aquí después del break




//para que funcione debes comentar el break del inicio
//continue

while (i < 5) {
  i++; // Incrementamos al inicio para evitar bucle infinito

    if (i === 3) {
    console.log("Saltamos el número 3...");
    continue; // Salta directamente a la siguiente evaluación del while
}

    console.log("Contando: " + i);
}