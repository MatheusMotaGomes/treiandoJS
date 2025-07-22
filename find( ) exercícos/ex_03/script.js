//Encontre o primeiro número negativo.

let numeros = [4, 7, -3, 9, -12, 15];

let negativo = numeros.find((numero) => {
  return numero < 0;
});

console.log(negativo);
