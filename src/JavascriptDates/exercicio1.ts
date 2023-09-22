// Escreva uma função que receba 
// duas instâncias de data como argumentos. 
// Deve retornar verdadeiro se as datas 
// forem iguais, caso contrário retornará falso.

//const data = new Date('December 23 2021 23:18')
const data2 = new Date('September 18 2023 22:14')
const data = new Date('September 18 2023 22:14')


const comparaData = (a:Date,b:Date) => {
    if (a.getTime() === b.getTime()){
        return true
    } else return false
}

console.log(comparaData(data,data2));

