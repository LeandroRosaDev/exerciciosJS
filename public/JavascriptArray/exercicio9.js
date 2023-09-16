"use strict";
// Escreva uma função que receba um array (a) 
// e um número (b) como argumentos. 
// Retorne os elementos da matriz maiores que b
function retornarArgMaior([...a], b) {
    const filtrar = a.filter((i) => i > b);
    return filtrar;
}
console.log(retornarArgMaior([1, 2, 3, 4, 5, 6, 7], 4));
