// Escreva uma função que receba 
// duas instâncias de data como argumento. 
// Deve retornar verdadeiro se caírem 
// exatamente no mesmo dia, caso contrário, retornar falso.

const dataDiasIguais:Date = new Date('September 18 2023')
const dataDiasIguais2:Date = new Date('September 17 2023')

const verificaDiasIguais = (a:Date,b:Date):boolean => {
    if (a.getDate() === b.getDate()) {return true}
    else return false

}
console.log(verificaDiasIguais(dataDiasIguais,dataDiasIguais2));
