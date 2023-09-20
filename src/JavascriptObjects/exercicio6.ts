// Escreva uma função que receba um objeto como argumento. 
// Substitua por strings de valores nulos (nulos) que contêm apenas 
// valores vazios ou espaços em branco. Retorne o objeto resultante

const objetosNulos = {
    a:'1',
    b:'2',
    c:''
}

const retornaObjNulos = (a:any) => {
    
    const obj = a 
    return Object.keys(obj).reduce((acumulador:any,atual:any)=>{        
        if(obj[atual].trim() === ''){
            acumulador[atual] = null 
        } else {
            acumulador[atual] = obj[atual]
        }
        return acumulador  
    },{})
}

console.log(retornaObjNulos(objetosNulos));
