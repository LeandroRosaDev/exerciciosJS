// Escreva uma função que receba 4 strings e as 
// retorne organizadas em ordem alfabética.

const organizaString = (st1:string, st2:string, st3:string, st4:string):string => {
   var organizaStrings = [st1, st2, st3, st4]
   .join(' ')
   .toLowerCase()
   .split(' ')
   .sort()
   .join()
    return organizaStrings;
}
console.log(organizaString('banana', 'pera', 'Uva', 'ovo'));
