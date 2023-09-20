// Escreva uma função que receba dois números 
// (mínimo e máximo) como argumentos. 
// Retorna uma matriz de números no intervalo mínimo a máximo 
// (intervalo entre o primeiro argumento e o segundo)

const retornaNumerosContidos = (a:number,b:number):number[] => {
    var array = [a]
    for(let i=a+1; i<=b; i++){
         array.push(i)
    }
   return array;
}
console.log(retornaNumerosContidos(2,5));

