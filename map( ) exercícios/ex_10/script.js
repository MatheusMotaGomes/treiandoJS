/*
Use .map() para criar um novo array de objetos, onde cada objeto tenha as propriedades:

original: o número original

dobrado: o número multiplicado por 2

Exemplo do resultado esperado:
[
  { original: 3, dobrado: 6 },
  { original: 7, dobrado: 14 },
  { original: 12, dobrado: 24 }
]
Dica: basta retornar um objeto dentro do .map(). Para objetos literais dentro de arrow functions, use parênteses para envolver o objeto.
*/

let numeros = [3, 7, 12];

let objetos = numeros.map((valor) => {
  return ({ original : valor, dobrado: valor * 2})
});

console.log(objetos);
