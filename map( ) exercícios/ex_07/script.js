/*Objetivo: Criar um novo array onde cada nome comece com letra maiúscula e o restante seja minúsculo.

Dica de como fazer:
nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
*/

let nomes = ['ana', 'bruno', 'carlos'];

let nomesFormatados = nomes.map((nome) => {
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

});

alert(nomesFormatados.join(" - "));
