"use strict";
// Escreva uma função que receba um array com 
// elementos arbitrários (a) e um número (b) como argumentos. 
// Retorne a array, o primeiro elemento deve ser o 
// próprio número fornecido (b) ou zero se o número (b) for menor que 6
function numerosArbitrarios([...a], b) {
    if (b >= 6)
        a.unshift(b);
    else
        a.unshift(0);
    return a;
}
console.log(numerosArbitrarios([null, false], 6));
