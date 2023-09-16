"use strict";
// Escreva uma função que receba dois números (a e b) 
// como argumentos. Se a for menor que b, divida a por b. 
//Caso contrário, multiplique os dois números. 
// Retorne o valor resultante
function compararNumero(n1, n2) {
    if (n1 <= n2)
        return n1 / n2;
    else
        return n1 * n2;
}
console.log(compararNumero(10, 100));
