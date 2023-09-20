"use strict";
const objMisturado = {
    z: 'a',
    y: 'b',
    x: 'c',
    w: 'd',
};
const arrumarObj = (arg) => {
    return Object.keys(arg).reduce((acumulador, atual) => {
        acumulador[arg[atual]] = atual;
        return acumulador;
    }, {});
};
console.log(arrumarObj(objMisturado));
