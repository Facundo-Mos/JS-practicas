let pares = [
    [1, {id:1, name: 'Nicolas'}],
    [2, {id:2, name: 'Felipe'}],
    [3, {id:3, name: 'Facundo'}],
];

function toCollection(arr) {
    let collection = [];
    for(idx in pares) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pares);
console.log(resultado);




/* function toPairs(arr){
    let pairs = [];
    for(idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }                //idx sirve para referenciar los indices
    return pairs;
} */