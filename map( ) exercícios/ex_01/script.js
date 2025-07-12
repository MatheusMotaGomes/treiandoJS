/*
Exercício 1 – Dobrar todos os números
*/
// Dado este array
let numeros = [3, 7, 12, 5, 9];

// Crie um novo array com todos os números dobrados
// Use map()
// Mostre o resultado com alert()

let dobrados = numeros.map(function(numero){
  return numero * 2;
})

alert(dobrados);
