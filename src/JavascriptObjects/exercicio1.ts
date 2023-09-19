// Apresente alguns exemplos do que é um 
// objeto literal e um objeto construtor


//Exemplo de objeto literal
interface objetoNIE {
    nome:string;
    idade:number;
    escolaridade?:string
}
const objetoLiretal:objetoNIE = {
    nome:'leandro',
    idade:28,
    escolaridade:'superior cursando'
}
console.log(objetoLiretal);



function ObjetoConstrutor(nome:string, idade:number, escolaridade:string){
    this.nome = nome;
    this.idade = idade;
    this.escolaridade = escolaridade;
}
const objetoConstruido = new ObjetoConstrutor('Junior', 25, 'superior')
const objetoDescontruido = new ObjetoConstrutor('Senior', 56, 'fundamental')

console.log(objetoDescontruido);


