/* cuando definimos un objetos en Js lo que tenemos que hacer es crea una variable 
ej "let obj = {};" sin embargo este es un atajo que tiene js para llamara al constructor de objetos 
 */

let obj = new Object(); //este es un constructor de objetos



/* otros tipos de constructores son 
new Array();
new String();                               todo lo que construyamos con estos no se comportara de la misma manera que 
new Boolean();                              lo que escribamos de forma literal ej en la linea 20
new Number(); */

function Usuario() {
    this.name = 'Facundo aprende';
}let user = new Usuario();
console.log(user.constructor);

//EJ
const s1 = "1 + 1";
const s2 = new String ("1 + 1");        /* eval EVALUA lo que se encuentra dentro la string y como podemos notar*/
console.log(eval(s1), eval(s2));        /* escrita por nosotros de forma literal sera interpretada y resuelta pero la construida NO */ 


//si queremos que se comoporte como una string literal tenemos que usar el valueOf ej:
console.log(s2.valueOf());
//esto tambien se puede aplicar con los Boolean y los Number