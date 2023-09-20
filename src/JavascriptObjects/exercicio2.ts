// Escreva uma função que receba um objeto 
// com duas propriedades como argumento. 


const objeto2Props = {
    nome:'Leandro',
    idade:26
}
const recebeObj = (obj:objetoNIE) => {
    return obj.nome
}
console.log(recebeObj(objeto2Props));

