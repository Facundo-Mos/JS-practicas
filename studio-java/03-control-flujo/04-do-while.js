/* 
el do while a diferencia del while, no evaluara la condicion al inicio sino que lo hara al final
*/


let i=0;
while (i < 10) {
    if (i % 2 == 0){
    console.log('Numero par ', i);
    }
    i++;  //importante dejar afuera esto poruqe de caso contrario entrariamos en un loop infinito
}


do {
    if (i % 2 == 0){
    console.log('Numero par ', i);
    }
} while (i < 10);


/*
en while primero se controla que la condicion se cumpla, en cambio do while primero sigue las condiciones
y despues evalua si se cumplen para seguir el loop
*/