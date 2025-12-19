let i=0;
while (i < 10) {
    if (i % 2 == 0){
    console.log('Numero par ', i);
    }
    i++;  //importante dejar afuera esto poruqe de caso contrario entrariamos en un loop infinito
}
/*
for se comporta al igual que while pero lo hace todo en la misma linea y se compone de tres
expresiones la pimera es la inicializacion de la variable "let = 2", despues tenemos
una comparacion en este caso "i < 10" y luego ejecutamos la accion "i++"
for (expresion;expresion;expresion) {
}
*/

for (let i=0;i < 10;i++) {
    if (i % 2 == 0){
    console.log('Numero par ', i);
    }
}