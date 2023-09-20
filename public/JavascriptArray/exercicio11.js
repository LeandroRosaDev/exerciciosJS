"use strict";
//  Escreva uma função que receba um array (a)
//  e um número (b) como argumento. 
//  Extraia os últimos elementos de a, usando b
//   como a quantidade de números a serem extraídos. 
//   Retorne a matriz resultante
const removerNumeros = ([...a], b) => {
    const resultado = a.splice(-b);
    return resultado;
};
console.log(removerNumeros([1, 2, 3, 4, 5, 6, 7], 3));
