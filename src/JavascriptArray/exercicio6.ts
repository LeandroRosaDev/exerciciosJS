// Escreva uma função que receba como argumentos 
// um número arbitrário de arrays. 
// Deve retornar um array contendo os 
// valores de todos os arrays

const somaArrays = (...[b]:Array<Array<string|number|boolean>>):Array<string|boolean|number> => {
    var soma:Array<string|boolean|number> = []
    for(let i=0; i<b.length; i++){
        soma = soma.concat(b[i])
    }
    return soma;
}
console.log(somaArrays(['sss','234',123,67],['jiaj',12,54],[1,2,3,'dois']));

