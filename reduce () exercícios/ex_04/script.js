/*
Dado o array [5, 12, 8, 130, 44], use reduce() para encontrar o maior número do array.
*/

let numeros = [5, 12, 8, 130, 44];
let primeiroValor = numeros[0]

let maiorNumero = numeros.reduce((acumulador, valorAtual) => {
  return (valorAtual > acumulador) ? valorAtual : acumulador; 
}, primeiroValor)

console.log(maiorNumero);
