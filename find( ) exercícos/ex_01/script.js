/*
Dado o array abaixo, encontre o primeiro número maior que 50:
*/

let numeros = [12, 45, 67, 23, 89, 5];

let encontrado = numeros.find((numero) => {
  return numero > 50;
});

console.log("O primeiro valor maior que 50, encontrado foi : " + encontrado);
