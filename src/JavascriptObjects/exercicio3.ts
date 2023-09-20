// Escreva uma função que receba um objeto 
// como argumento. 
// Remova uma das propriedades do objeto e 
// retorne o objeto atualizado.
interface n {
    a?:number;
    b?:number;
    c?:number;
    d?:number;
    e?:number;
}
const obj = {
    a:1,
    b:7,
    c:3,
}

const objeto = (arg:n):n =>{
    delete arg.a
    return arg;
}
console.log(objeto(obj));


