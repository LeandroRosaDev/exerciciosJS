"use strict";
// Escreva uma função que receba 
// duas instâncias de data (a e b) 
// como argumentos. Deve retornar verdadeiro 
// se a for anterior a b, caso contrário, retornar falso.
const dataAnterior = new Date('September 18 2023 21:08');
const dataAnterior2 = new Date('September 18 2023 21:09');
const verificaDataAnterior = (a, b) => {
    const data = a.getTime();
    const data2 = b.getTime();
    if (data < data2)
        return true;
    else
        return false;
};
console.log(verificaDataAnterior(dataAnterior, dataAnterior2));
