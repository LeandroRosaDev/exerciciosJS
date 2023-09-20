// Escreva uma função que receba um array com 
// elementos arbitrários (a) e um número (b) como argumentos. 
// Retorne a array, o primeiro elemento deve ser o 
// próprio número fornecido (b) ou zero se o número (b) for menor que 6

const numerosArbitrarios = ([...a]:Array<any>,b:number):Array<string|number|boolean> => {
     if(b>=6) a.unshift(b)
     else a.unshift(0)
     return a
}
console.log(numerosArbitrarios([null,false],6));
