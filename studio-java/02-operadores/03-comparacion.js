/*
se utilizan para poder comparar distintas variables entre si o una variable
con otra cosa
Cada vez que usemos un operador de comparacion este nos devolvera un Boolean
"true" o "false"
*/

//operadores relacionales
let a = 10;
console.log(a > 5);
console.log(a >= 5);
console.log(a < 5);
console.log(a <= 5);

//operadores de igualdad
console.log(a == 10); //aca se pregunta si es igual
console.log(a != 10); //aca se pregunta si es distinto
console.log(a == "10")// en este caso dara verdadero porque "10" y 10 tiene la misma cantidad de 
// digitos (no compara el numero como tal)


//es recomendable usar estos porque previenen errores
console.log(a === "10");//en este caso consultara si tiene el mismo valor y el tipo de dato
console.log(a !== "10");//en este caso consultara si tiene distinto valor y el tipo de dato