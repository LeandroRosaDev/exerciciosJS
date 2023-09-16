"use strict";
// Escreva uma função que receba um array de números como argumento. 
// Deve retornar um array com os números classificados em ordem decrescente
function organizaNumeros([...n]) {
    var novoN = n.sort((a, b) => {
        return b - a;
    });
    return novoN;
}
console.log(organizaNumeros([5.3, 2 / 3, 23, -4, 5.1]));
