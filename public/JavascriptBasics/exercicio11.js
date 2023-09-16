"use strict";
// Escreva uma função que receba dois valores, digamos a e b, como argumentos. 
// Retorna verdadeiro se os dois valores forem iguais e do mesmo tipo
function numerosIguais(n1, n2) {
    if (n1 === n2 && typeof n1 === typeof n2) {
        return true;
    }
    else
        return false;
}
console.log(numerosIguais(false, true));
