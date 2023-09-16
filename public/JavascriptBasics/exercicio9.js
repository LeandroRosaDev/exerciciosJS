"use strict";
// Escreva uma função que receba um número (a) como argumento.
// Se a for primo, retorne a. Caso contrário, retorne o próximo número primo mais alto
function numeroPrimo(np) {
    var contador = 0;
    let novoNp = Math.floor(np);
    for (let i = 1; i <= novoNp; i++) {
        if (novoNp % i === 0) {
            contador++;
            ;
        }
    }
    if (contador === 2) {
        return console.log(np);
    }
    else {
        proximoNumeroPrimo(novoNp);
    }
    function proximoNumeroPrimo(pnp) {
        var contador = 0;
        for (let i = 1; i <= pnp; i++) {
            if (pnp % i === 0) {
                contador++;
            }
        }
        if (contador === 2) {
            return console.log(pnp);
        }
        else {
            proximoNumeroPrimo(novoNp++);
        }
    }
}
numeroPrimo(13);
