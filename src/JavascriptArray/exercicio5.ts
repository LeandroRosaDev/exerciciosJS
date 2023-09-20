// Escreva uma função que receba um 
// array de strings como argumento. 
// Retornar a string mais longa

const retornaString = ([...n]:string[]):string => {
    n.sort((a,b)=>{
       return b.length - a.length
    })
    return n[0];
}
console.log(retornaString(['mauro','uva','bananaaaaaa' ,'peroba','manga']));
