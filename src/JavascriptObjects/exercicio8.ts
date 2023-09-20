// Escreva uma função que receba um array de objetos
//  e uma string como argumentos. 
//  Adicione uma propriedade com chave 'continente' 
//  e valor igual à string para cada um dos objetos. 
//  Retorne o novo array de objetos
interface O {
    cidade:string;
    país:string;
}
const paises:O = {
    cidade:'tóquio',
    país:'japão',
}

const adicionarChave = ([...a]:any, b:string) => {
    a.forEach(item => {
        item.continente = b
    });
    return a
    
}
console.log(adicionarChave([{cidade:'Tóquio', país:'japão'},{cidade:'Bangkok', país:'Tailândia'}],'Asia'));

