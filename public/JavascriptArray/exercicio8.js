"use strict";
// Escreva uma função que receba 
// dois arrays como argumentos. 
//Mesclar ambas as matrizes e remover 
//valores duplicados. Classifique o 
//resultado da mesclagem em ordem crescente. 
// Retorne a matriz resultante
const mesclarArrays = ([...a], [...b]) => {
    const array1 = a;
    const array2 = b;
    const soma = array1.concat(array2).sort((a, b) => {
        return a - b;
    });
    const set = new Set(soma);
    const novaArray = Array.from(set);
    return novaArray;
};
console.log(mesclarArrays([1, 33, 2, 3, 4], [2, 4, 33, 5, 1, 7]));
