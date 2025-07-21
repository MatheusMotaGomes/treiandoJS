/*
  Use reduce() para encontrar o maior valor do array.
  Saída esperada: 42.
*/

let numeros = [15, 8, 42, 4, 23];

let numeroMaior = numeros.reduce((acumulador, valorAtual) => {
  if(valorAtual > acumulador) {
    return acumulador = valorAtual;
  }else {
    return acumulador;
  }
}, 0);

console.log("o maior valor é: " + numeroMaior);
