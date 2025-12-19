/*
cada vez que escribimos codigo vamos a tener que estar atentos de no escribir un loop infinito,
un loop infinito es una porcion de codigo que se ejecuta de manera infinita
*/
let i=0;
while (i < 10) {
    console.log('Numero par ', i);
    i++;  //para ve el infinito debes comentar esta linea, mucha atencion porque al hacerlo muy probablemente cierre el browser
}