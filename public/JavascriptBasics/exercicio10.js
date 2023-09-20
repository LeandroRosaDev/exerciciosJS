"use strict";
// Escreva uma função que receba dois números, digamos x e y, como argumentos. 
// Verifique se x é divisível por y. Se sim, retorne x. 
// Caso contrário, retorne o próximo número natural maior que seja divisível por y
const numeroDivisivel = (x, y) => {
    var n1 = Math.floor(x);
    var n2 = Math.floor(y);
    if (n1 % n2 === 0) {
        return n1;
    }
    else
        for (n1 % n2 !== 0; n1++;) {
            if (n1 % n2 === 0) {
                return n1;
            }
        }
};
console.log(numeroDivisivel(21, 2));
