"use strict";
// Escreva uma função que receba 
// duas instâncias de data como argumento. 
// Deve retornar verdadeiro se a diferença 
// entre as datas for menor ou igual a 1 hora, 
// caso contrário retornará falso.
const dataHoras = new Date('September 18 2023 22:10');
const dataHoras2 = new Date('September 18 2023 21:09');
const diferençaEntreHoras = (a, b) => {
    const diferença = a.getTime() - b.getTime();
    const converterMinutos = diferença / (60 * 1000);
    console.log();
    if (converterMinutos <= 60)
        return true;
    else
        return false;
};
console.log(diferençaEntreHoras(dataHoras, dataHoras2));
