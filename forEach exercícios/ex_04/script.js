/*
Exercício 4 – Contar quantos nomes começam com a letra A
*/

let nomes = ["Ana", "João", "Amanda", "Carlos", "Alberto", "Beatriz"];
// Conte quantos nomes começam com a letra A usando forEach
let somador = 0;

nomes.forEach(function(nome){
  if(nome[0] === "a" || nome[0] === "A"){
    somador++
  }
})

alert(`Existem ${somador} nome(s) que começam com a letra "A"`);
