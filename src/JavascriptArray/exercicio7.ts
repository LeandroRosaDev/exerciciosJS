// ### Escreva uma função que receba um array (a) 
// e um valor (b) como argumento.
// A função deve remover o valor (b) do array (a). 
// Retorne a matriz filtrada


const removerArgumentodaArray = ([...a]:Array<number|boolean|string>,b:number|string|boolean):Array<number|boolean|string> => {
    var array = a
    var resultado = array.filter((item:string|boolean|number)=>{
        return item != b 
    })
    return resultado;
}
console.log(removerArgumentodaArray([1,2,3,false],false));



