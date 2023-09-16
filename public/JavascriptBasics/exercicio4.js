"use strict";
// Escreva uma função que receba um argumento 
// e verifique se o número é um número inteiro. 
// Retorne o resultado para o console.
function verificaNumeroInteiro(numero) {
    const inteiro = Number.isInteger(numero);
    if (inteiro)
        return 'Este é um numero inteiro';
    else
        return 'Este não é um numero inteiro';
}
console.log(verificaNumeroInteiro(33.2));
