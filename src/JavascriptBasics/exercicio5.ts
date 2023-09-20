// Escreva uma função que receba dois números (a e b) 
// como argumentos. Se a for menor que b, divida a por b. 
//Caso contrário, multiplique os dois números. 
// Retorne o valor resultante

const compararNumero = (n1:number,n2:number):number => {
    if(n1 <= n2 ) return  n1 / n2 
    else return n1 * n2 
}
console.log(compararNumero(10, 100))