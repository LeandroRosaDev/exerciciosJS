"use strict";
// Escreva uma função que receba um número como argumento. 
// Verifique se o número é par ou ímpar e devolva-o ao console
const verificaNumero = (a) => {
    if (a % 2 == 0)
        return 'Este é um numero par';
    else
        return 'Este é um numero impar';
};
console.log(verificaNumero(3));
