"use strict";
// Escreva uma função que receba um objeto (a) como argumento. 
// Retornar um array com todas as chaves do objeto
//Comentário pessoal, essa tava desbalanceada de fácil
const objetoChaves = {
    a: 1,
    b: 2,
    c: 3,
};
const retornaArrayObj = (a) => {
    return Object.keys(a);
};
console.log(retornaArrayObj(objetoChaves));
