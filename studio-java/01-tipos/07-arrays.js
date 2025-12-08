//arrays
let animales = ['chanchito', 'caballo']; //los arrays a diferecia de las llaves respetan el orden 
console.log(animales);
console.log(animales[0]);//la cuenta de elementos empieza desde 0, es decir 0 = 'chanchito'
animales[2] = 'dragon'; //aca se esta agregando el elemento 2 

console.log(animales[0]);
/*hay que estar atentos cuando se agregan elementos a los arreys porque 
en el caso de agregar un elementos de mas nos va a decir que es null null=object*/

//EJ
animales[10] = 'pez' /*en este caso del elemento 3 al 9 seran null 
porque no los agregamos y esto los vuelve un null = object*/
console.log(animales);
console.log(typeof animales[7]); //en este caso tendra un valor undefined, tipo de dato object
console.log(animales.length); //esto me va a devolver la cantidad de elementos que se encuentran dentro de ese array
//longitus es de 11, es decir que el array contiene 11 elementos 
