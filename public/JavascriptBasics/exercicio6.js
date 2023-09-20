"use strict";
// ### Escreva uma função que receba dois argumentos como string. 
// Verifique se a primeira string está contida na segunda. 
// Retorne o resultado para o console.
const comparaString = (frase, fraseCompleta) => {
    frase = frase.toLowerCase();
    fraseCompleta = fraseCompleta.toLowerCase();
    if (fraseCompleta.includes(frase))
        return 'Existe';
    else
        return 'não existe';
};
console.log(comparaString('não', 'meu computador não chega hoje'));
