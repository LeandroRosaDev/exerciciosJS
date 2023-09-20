"use strict";
// Escreva uma função que receba um array de 
// números como argumento. 
// Retorne a média dos números
const mediaNumeros = ([...n]) => {
    var soma = 0;
    for (let i = 0; i < n.length; i++) {
        soma = soma + n[i];
    }
    var resultado = soma / n.length;
    return resultado;
};
console.log(mediaNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
