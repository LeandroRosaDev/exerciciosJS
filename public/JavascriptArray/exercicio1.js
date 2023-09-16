"use strict";
// Escreva uma função que receba um array como argumento. 
// Deve retornar verdadeiro se todos os elementos da matriz 
//forem iguais. 
// Deve retornar falso caso contrário
function arrayItensIguais([...arg]) {
    const item = arg[0];
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] !== item) {
            return false;
        }
    }
    return true;
}
console.log(arrayItensIguais(['teste1', 'teste', 'teste']));
