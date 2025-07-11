/*
Exercício 3 – Somar todos os elementos de um array com forEach()
Desafio: sem usar reduce(), apenas forEach().
*/

let numeros = [10, 20, 30, 40, 50];
let somador = 0;

numeros.forEach(function(valor){
  somador += valor;
})

alert(`A soma dos valores é : ${somador}`);
