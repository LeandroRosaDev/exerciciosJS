"use strict";
// ### Escreva uma função que receba um array (a) 
// e um valor (b) como argumento.
// A função deve remover o valor (b) do array (a). 
// Retorne a matriz filtrada
// function removerArgumentodaArray ([...a],b){
//     var valor = a 
//     var encontrar = valor.indexOf(b);
//     console.log(encontrar);
//     if(valor.includes(b) === true){
//        valor.splice(encontrar,b)
//        return console.log(valor);  
//     }
//     else console.log('não está');
// }
//  removerArgumentodaArray([1,2,2,3],2)
function removerArgumentodaArray([], b) {
    var array = arguments[0];
    var resultado = array.filter((item) => {
        return item != arguments[1];
    });
    return resultado;
}
console.log(removerArgumentodaArray([1, 2, 3, false], false));
