/*
🧪 Exercício 6 – Somar apenas os números pares
*/
let numeros = [5, 8, 13, 22, 41, 60];
// Use o forEach para somar apenas os números pares
// Depois, mostre o resultado com alert()

let somador = 0;

numeros.forEach(function(numero){
  if(numero % 2 == 0){
    somador += numero;
  }
})

alert(`A soma dos números pares é : ${somador}`);
