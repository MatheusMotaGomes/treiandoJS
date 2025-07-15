/*
Use .reduce() para calcular o produto (multiplicação) de todos os números.
Mostre o resultado com console.log() ou alert().

Dica:

O valor inicial do acumulador deve ser 1 (não 0, pois qualquer número vezes 0 dá 0).
*/

let numeros = [2, 3, 4, 5];

let multiplicacao = numeros.reduce((acumulador, valorAtual) => {
  return acumulador * valorAtual
}, 1);

console.log(multiplicacao);
