"use strict";
// ### Escreva uma função que receba
//  um array de strings como argumento. 
// Agrupe essas strings pela primeira letra. 
// Retorna um objeto que contém propriedades 
// com chaves representando as primeiras letras.
// Os valores devem ser arrays de strings contendo apenas as strings correspondentes. 
// Por exemplo, o array ['Alan', 'Allen', 'Bruno'] deve ser transformado 
// em { a: ['Alan', 'Allen'], b: ['Bruno']}
function retornaObjs([...a]) {
    const obj = {};
    for (const b of a) {
        const letraInicial = b[0].toLowerCase();
        if (obj[letraInicial]) {
            obj[letraInicial].push(b);
        }
        else {
            obj[letraInicial] = [b];
        }
    }
    return obj;
}
console.log(retornaObjs(["carol", "allen", "breno", "allan", "almir", "bradley"]));
