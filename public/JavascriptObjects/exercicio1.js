"use strict";
// Apresente alguns exemplos do que é um 
// objeto literal e um objeto construtor
const objetoLiretal = {
    nome: 'leandro',
    idade: 28,
    escolaridade: 'superior cursando'
};
console.log(objetoLiretal);
function ObjetoConstrutor(nome, idade, escolaridade) {
    this.nome = nome;
    this.idade = idade;
    this.escolaridade = escolaridade;
}
const objetoConstruido = new ObjetoConstrutor('Junior', 25, 'superior');
const objetoDescontruido = new ObjetoConstrutor('Senior', 56, 'fundamental');
console.log(objetoDescontruido);
