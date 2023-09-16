// Escreva uma função que receba 
// dois arrays como argumentos. 
//Mesclar ambas as matrizes e remover 
//valores duplicados. Classifique o 
//resultado da mesclagem em ordem crescente. 
// Retorne a matriz resultante

function mesclarArrays([]:number[],[]:number[]):unknown[]{
    const array1 = arguments[0]
    const array2 = arguments[1]
    const soma = array1.concat(array2).sort((a:number,b:number)=>{
       return a - b
    })
    const set = new Set(soma)
    const novaArray = Array.from(set)
    return novaArray;
}
console.log(mesclarArrays([1,33,2,3,4],[2,4,33,5,1,7]));

