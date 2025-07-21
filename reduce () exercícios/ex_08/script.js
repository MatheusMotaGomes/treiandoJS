/*
Use reduce() para calcular a média das notas.

Dicas:
Use reduce() para somar todos os valores.
Depois, divida pela quantidade de elementos (notas.length).
*/

let notas = [7, 8, 5, 10];
let divisor = notas.length;

let media = notas.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual
}, 0);

console.log("A média é : " + (media / divisor).toFixed(2));
