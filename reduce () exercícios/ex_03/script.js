/*
Dado o array abaixo, crie uma variável que armazene a soma somente dos números pares usando o método reduce().
*/

let numeros = [1, 2, 3, 4, 5, 6];

let somaPares = numeros.reduce((acumulador, valorAtual) => {
  if(valorAtual % 2 == 0){
   return acumulador + valorAtual;
  } else {
    return acumulador;
  }
  
}, 0)

console.log(somaPares);
