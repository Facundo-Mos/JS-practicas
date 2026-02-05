let array = [2, 5, 7, 15, -5, -100, 55]
function numerosPositivos(arr) {
    let positivo = 0;
    for (numero of arr) {
        if (numero > 0) {
            positivo++;
        }
    }return positivo;
}
let resultado = numerosPositivos(array);
console.log (resultado);