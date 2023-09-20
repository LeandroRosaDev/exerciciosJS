// Escreva uma função que receba um objeto como argumento. 
// As propriedades e chaves do objeto estão misturadas. 
// Troque a chave do objeto Javascript 
// por seus valores e retorne o objeto resultante
interface a {
    z?:string;
    y?:string;
    x?:string;
    w?:string;
}
const objMisturado = {
    z:'a',
    y:'b',
    x:'c',
    w:'d',
}

const arrumarObj = (arg:any):a =>{
    return Object.keys(arg).reduce((acumulador:any, atual)=>{
        acumulador[arg[atual]]=atual;
        return acumulador
    },{})
}
console.log(arrumarObj(objMisturado));



  