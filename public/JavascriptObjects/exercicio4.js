"use strict";
// Escreva uma função que receba dois objetos como argumentos. 
// A propriedade 'b' no segundo objeto tem a chave errada; 
// em vez disso, deveria ser chamada de 'd'. 
// Mesclar os dois objetos e corrigir o nome de propriedade incorreto. 
// Retorne o objeto resultante. Deve ter as propriedades 'a', 'b', 'c', 'd' e 'e'
const obj1 = {
    a: 1,
    b: 3
};
const obj2 = {
    c: 1,
    b: 2,
    e: 5,
};
const MesclarObj = (objeto1, objeto2) => {
    objeto2.d = objeto2.b;
    delete objeto2.b;
    return Object.assign(objeto1, objeto2);
};
console.log(MesclarObj(obj1, obj2));
