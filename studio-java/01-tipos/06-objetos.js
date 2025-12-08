//personajes
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = "26";


let personaje = {           //{} sdi dr sbre una llave
    nombre: "Tanjiro",  //cuando la llave esta abierta no se usa el = sino los ":"
    anime: "Demon Slayer",//la llave es "anime", "nombre" y "edad" y el valor es "Tanjiro", "Demon Slayer" y "16"
    edad: 16, //las llaves a veces pueden ser llamadas como propiedad
};
console.log(personaje); //en este caso nos dara cada valor de las llaves pero sin seguir un orden
console.log(personaje.nombre); //en este caso en la consola nos dira el nombre
console.log(personaje["anime"]);//aqui llamamos a la propiedad nombre pero para hacerlo debemos hacerlo como str

personaje.edad = 13; //haciendo esto estamos modificando el valor de la llave "edad"

personaje['edad'] = 16;//este es otro metodo para modificar el valor pero con los []

delete personaje.anime // de esta forma se elimina una llave

console.log(personaje)