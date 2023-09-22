// Escreva uma função que receba 
// como argumento uma instância de data (a) 
// e um número (b). Deve adicionar b dias 
// a a e retornar o número de milissegundos 
// desde 1º de janeiro de 1970, 00:00:00 UTC

// const dataInicial:Date = new Date('September 18 2023 21:08')
const dataInicial:Date = new Date(2000,1,1)


const novaData = (a:Date, b:number) => {
    const dataNova = a.setDate(b)
    return dataNova;
}
console.log(novaData(dataInicial,10));
