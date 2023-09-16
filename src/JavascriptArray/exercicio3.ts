// Escreva uma função que receba um array de strings como argumento. 
// Classifique os elementos da matriz em ordem alfabética. 
// Devolva o resultado

function organizaStrings([...n]:string[]):string[]{
    var nm = n.toString().toLowerCase().split(',').sort()
    return nm;
}

console.log(organizaStrings(['alo','cla','Ble','zlu','Plor',]));
