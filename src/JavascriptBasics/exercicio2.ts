// Escreva uma função que receba um número como argumento. 
// Verifique se o número é par ou ímpar e devolva-o ao console

function verificaNumero (a:number):string{
    if(a % 2 == 0 ) return 'Este é um numero par'
    else return 'Este é um numero impar'
}

console.log(verificaNumero(3))