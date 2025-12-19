let a = 5; // Declaramos la variable 'a' y le asignamos el valor inicial de 5.

a = a + 5; // Operador de asignación simple: Suma 5 al valor actual de 'a' y reasigna el resultado (a ahora es 10).

// A partir de aquí, usamos los OPERADORES DE ASIGNACIÓN COMPUESTOS:
// Estos son atajos para hacer una operación y reasignar el resultado en un solo paso (a = a [operador] [valor]).

a += 5; // Operador de Asignación de Suma: Equivale a a = a + 5; (a ahora es 15).
a -= 5; // Operador de Asignación de Resta: Equivale a a = a - 5; (a ahora es 10).
a *= 5; // Operador de Asignación de Multiplicación: Equivale a a = a * 5; (a ahora es 50).
a /= 5; // Operador de Asignación de División: Equivale a a = a / 5; (a ahora es 10).
a %= 5; // Operador de Asignación de Módulo (Resto): Equivale a a = a % 5; (a ahora es 0, porque 10/5 tiene un resto de 0).
a **= 5; // Operador de Asignación de Exponenciación: Equivale a a = a ** 5; (a ahora es 0 elevado a la potencia de 5, que sigue siendo 0).

console.log(a); // Muestra el valor final de 'a' después de todas las operaciones (El resultado final es 0).