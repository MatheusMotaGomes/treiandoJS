/*
👉 Verifique se existe algum número maior que 45.
O resultado deve ser true.
*/

let numeros = [10, 20, 30, 40, 50];

let maiorNumero = numeros.some((numero) => {
  return numero > 45;
});

console.log(maiorNumero);
