// Escreva uma função que receba um array (a) 
// e um número (b) como argumentos. 
// Retorne os elementos da matriz maiores que b

const retornarArgMaior = ([...a]:number[],b:number):number[] => {
    const filtrar = a.filter((i)=> i > b)
    return filtrar;
}
console.log(retornarArgMaior([1,2,3,4,5,6,7],4));

