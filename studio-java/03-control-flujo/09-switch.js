/* 
switch nos va a permitir a nosotros explicarle a codigo donde queremos que se vaya 
dependdiendo del valor que tiene una variable 
*/
let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guardar':
        console.log('accion de guardar');
        break;
    default:
        console.log('accion no reconocida');
}

/*
cada vez que coloquemos un case vamos a tener que usar la palabra reservada de break
sino todo lo que venga despues de este case va a ser ejecutado independientemente si la 
variable vale o no vale eso
*/
/*
default no es obligatorio y se va a ejecutar siempre y cuando ningun case pueda corresponder a la 
variable
*/


//REDUX es una libreria que usa switch pero como funcionalidad tambien se podria usar if