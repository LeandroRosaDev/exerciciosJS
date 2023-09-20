// Escreva uma função que receba um número (a) como argumento.
// Se a for primo, retorne a. Caso contrário, retorne o próximo número primo mais alto

const numeroPrimo = (np:number):void => {
  const proximoNumeroPrimo = (pnp:number) => {
    var contador = 0
    for( let i = 1; i <=pnp; i++){
      if(pnp % i === 0){
        contador++;
      }
    }
    if (contador === 2){
      return console.log(pnp);
    }
    else {
      proximoNumeroPrimo(novoNp++);
    }
    
  }
  var contador = 0
  let novoNp  = Math.floor(np)
  for (let i = 1; i <= novoNp; i++){
    if (novoNp % i === 0){
      contador++;
      ;
    } 
  } 
  if (contador === 2){
    return console.log(np);
  } else {
     proximoNumeroPrimo(novoNp)
  }
  
}
  numeroPrimo(15) ;