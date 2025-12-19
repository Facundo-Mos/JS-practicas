/*
van a existir momentos donde vamos a querer ejecutar una porcion de codigo mas de una vez
en ese momento vamos a utilizar los loop
existen 5 tipos de loops en JS 
1-while
2-do while
3-for
4-for in
5-for of

while (condicion) {             solo se hara la funcion si la condicion se cumple
}


let i=0;
while (i < 10) {
    console.log(i);
    i++;
}

en este caso se repite el codigo como si fuese un ciclo
hasta que deje de ser menor a 10 */


let i=0;
while (i < 10) {
    if (i % 2 == 0){
    console.log('Numero par ', i);
    }
    i++;  //importante dejar afuera esto poruqe de caso contrario entrariamos en un loop infinito
}