/*
Crie um novo array apenas com os números negativos (ou seja, menores que zero).

Use .filter() e exiba o resultado com console.log() formatado com join(" - ") se quiser.
*/

let numeros = [10, -5, 23, -8, 0, -15, 42];

let negativos = numeros.filter((numero) => numero < 0);

console.log(negativos.join(" | "));

