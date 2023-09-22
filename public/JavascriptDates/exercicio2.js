"use strict";
// Escreva uma função que receba 
// duas instâncias de data como argumento. 
// Deve retornar o número de dias entre essas datas
const dataDias = new Date('September 18 2023 22:14');
const dataDias2 = new Date('September 18 2023 22:14');
const diasEntreDatas = (a, b) => {
    const diferença = a.getTime() - b.getTime();
    return diferença / (24 * 60 * 60 * 1000);
};
console.log(diasEntreDatas(dataDias, dataDias2));
