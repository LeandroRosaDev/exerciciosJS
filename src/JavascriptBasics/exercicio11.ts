// Escreva uma função que receba dois valores, digamos a e b, como argumentos. 
// Retorna verdadeiro se os dois valores forem iguais e do mesmo tipo

const numerosIguais = (n1:string|number|boolean, n2:string|number|boolean):string|number|boolean => {
    if(n1 === n2 && typeof n1 === typeof n2){
       return true;
    } else return false;   
}
console.log(numerosIguais(false,true));

