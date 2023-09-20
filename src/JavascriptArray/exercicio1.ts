// Escreva uma função que receba um array como argumento. 
// Deve retornar verdadeiro se todos os elementos da matriz 
//forem iguais. 
// Deve retornar falso caso contrário

const arrayItensIguais = ([...arg]:unknown[]):boolean => {   
        const item = arg[0]
        
        
        for (let i = 1; i < arg.length; i++){
            if(arg[i] !== item){
            return false;               
            }
        } return true;
        
}
console.log(arrayItensIguais(['teste1', 'teste', 'teste']));


