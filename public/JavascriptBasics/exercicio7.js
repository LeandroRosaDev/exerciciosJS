"use strict";
// Escreva uma função que receba um numero 
// decimal e depois separe-o em duas strings
const separadorDeNumero = (n) => {
    const nt = n.toString().split('.');
    return nt;
};
console.log(separadorDeNumero(23.2));
