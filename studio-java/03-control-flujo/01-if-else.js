/*
cuando queramos ejecutar una porcion de codigo pero solo cuando se cumpla una condicion
es cuando debemos utilizar "if" 

if (condicion)
    expresion

pero en el caso que tengamos mas de una expresion debemos usar {} 
if (condicion){
    expresion
}
en el caso de "else" sucede lo mismo, si el codigo va a ocupar mas de dos lineas debemos utilizar 
los {}
En el caso de aplicarse un codigo con muchas opciones, se aplicara en el orden de escritura es decir de arriba
hacia abajo
*/
let edad = 15;
let padres = "si"
if (edad > 17) {
    console.log('usuario mayor de edad');
} else if (edad > 13) {
    console.log('usuario necesita estar acompañado de sus padres');
} else {
    console.log('usuario menor de edad');
}