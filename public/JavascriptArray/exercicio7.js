"use strict";
// ### Escreva uma função que receba um array (a) 
// e um valor (b) como argumento.
// A função deve remover o valor (b) do array (a). 
// Retorne a matriz filtrada
const removerArgumentodaArray = ([...a], b) => {
    var array = a;
    var resultado = array.filter((item) => {
        return item != b;
    });
    return resultado;
};
console.log(removerArgumentodaArray([1, 2, 3, false], false));
