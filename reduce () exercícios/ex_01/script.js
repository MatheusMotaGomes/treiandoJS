/*
Use .reduce() para calcular a soma de todos os números.
Mostre o resultado com alert().

Dica:
A estrutura básica do reduce() é:

array.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, valorInicial);

*/

let numeros = [5, 10, 15, 20];

let soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(soma);
