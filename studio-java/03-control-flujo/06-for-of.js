/*
este loop se parece al for sin embargo este elemento nos presenta una herramienta un poco mas
simple para poder iterar elementos de un arreglo(array)
*/

let animales = [ 'leon', 'dragos', 'perro'];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}