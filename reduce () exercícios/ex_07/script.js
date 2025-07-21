/*
Crie uma string única, separando as palavras por espaço.
Saída esperada: "Olá mundo isto é reduce".
*/

let palavras = ['Olá', 'mundo', 'isto', 'é', 'reduce'];

let frase = palavras.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual + ' ';
}, '').trim();

console.log(frase);
