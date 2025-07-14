/*
Crie um novo array onde cada número seja somado ao seu índice.

Por exemplo:
O número 10 (índice 0) vira 10 + 0 = 10
O número 20 (índice 1) vira 20 + 1 = 21
... e assim por diante.

Use .map((valor, indice) => ...)
Mostre o array final com alert() e join(" | ") se quiser.
*/

let numeros = [10, 20, 30, 40, 50];

let numerosEindice = numeros.map((valor, indice) => {
  return valor + indice;
});

alert(numerosEindice.join(" - "));
