/*
Use .map() para criar um novo array onde:

Se o número for par, o valor seja "par"

Se for ímpar, o valor seja "ímpar"

Exemplo de saída esperada:
["ímpar", "par", "ímpar", "par", "ímpar", "par"]

*/

let numeros = [1, 2, 3, 4, 5, 6];

let numerosConvertidos = numeros.map((valor) => {
  if(valor % 2 == 0){
    return 'par';
  } else {
    return 'ímpar'
  };
})

alert(numerosConvertidos.join(" - "));
