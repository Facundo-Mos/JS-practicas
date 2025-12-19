let resultado = 8/2*(2+2);  // se agrega antes de los parentesis el * de caso contrario da error
console.log(resultado);


/*
Si queremos que la expresión matemática $8/2\cdot(2+2)$ resulte en 1 y no en el resultado estándar de 16,
debemos modificar la precedencia o el orden en que los operadores serán evaluados.
Expresión original: $8/2\cdot(2+2)
Resultado estándar: 16 (Según la regla de izquierda a derecha, después de los paréntesis).
Expresión modificada para obtener 1: $8/(2\cdot(2+2))
Resultado con paréntesis: 1
Conclusión
La precedencia de operadores es el conjunto de reglas que determina el 
orden en el que se ejecutan los diferentes operadores (como $+$, $-$, $*$, $/$ o $=$, etc.) en una expresión.
Para asegurarte de obtener un resultado específico y sobreescribir el orden de evaluación por defecto de JavaScript, 
debes utilizar paréntesis (). 
Los paréntesis indican al motor de JavaScript que la operación que contienen debe ser ejecutada primero.
*/