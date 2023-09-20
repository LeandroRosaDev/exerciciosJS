"use strict";
const paises = {
    cidade: 'tóquio',
    país: 'japão',
};
const adicionarChave = ([...a], b) => {
    a.forEach(item => {
        item.continente = b;
    });
    return a;
};
console.log(adicionarChave([{ cidade: 'Tóquio', país: 'japão' }, { cidade: 'Bangkok', país: 'Tailândia' }], 'Asia'));
