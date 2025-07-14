/*
Crie um novo array apenas com os números pares (ou seja, divisíveis por 2).
Use .filter() e mostre com console.log().
*/

let numeros = [4, 7, 10, 15, 22, 31];

let pares = numeros.filter((numero) => numero % 2 == 0)

console.log(pares.join(" - "));

