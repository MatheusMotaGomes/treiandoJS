/*
Encontre a primeira idade maior ou igual a 18.
*/

let idades = [12, 16, 19, 22, 14, 30];

let maiorDeIdade = idades.find((valor) => {
  return valor >= 18;
});

console.log(maiorDeIdade);
