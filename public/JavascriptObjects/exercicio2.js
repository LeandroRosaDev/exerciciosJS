"use strict";
// Escreva uma função que receba um objeto 
// com duas propriedades como argumento. 
const objeto2Props = {
    nome: 'Leandro',
    idade: 26
};
function recebeObj(obj) {
    return obj.nome;
}
console.log(recebeObj(objeto2Props));
// const pessoa = {
//     nome:'Nome Pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou'); 
//     }
// }
// function Pessoa(nome, idade){
//     this.nome = nome
//     this.idade = idade
//     this.andar = function(){
//         console.log(this.nome + ' andou');
//     }
// }
// const Joao = new Pessoa("Joao", 20)
// const Bruno = new Pessoa("Maria", 15)
// const maria = new Pessoa("Maria", 25)
// function Retornar(lista){
//     const element = document.querySelectorAll(lista)
//     this.elements = element
//     this.addClass = function(classe){
//         element.forEach((item)=>{
//             item.classList.add(classe)
//         })
//     }
//     this.remove = function(rmClass){
//         element.forEach((item)=>{
//             item.remove(rmClass)
//         })
//     }
// }
