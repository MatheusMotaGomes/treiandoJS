/*
Use reduce() para juntar todas as palavras em uma frase única separada por espaço, assim:
"Olá mundo isto é reduce"

O acumulador começa como uma string vazia ''.

Em cada passo, concatene o valorAtual à frase.

Cuidado para não deixar espaço extra no final.
*/

let palavras = ['Olá', 'mundo', 'isto', 'é', 'reduce'];

let fraseCompleta = palavras.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual + ' ';

},'');

console.log(fraseCompleta);
