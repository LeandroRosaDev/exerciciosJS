// Escreva uma função que receba duas strings (a e b)
// como argumentos. Retorne o número de vezes que a ocorre em b

function contarLetra(letraProcurada:string, frase:string ):number{
    let contador = 0
    letraProcurada = letraProcurada.toLowerCase()
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letraProcurada) {
            contador++
        }
    }
    return contador
}
console.log(contarLetra('é','noé é um cara de fé'))

