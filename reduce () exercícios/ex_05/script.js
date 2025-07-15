/*
Use reduce() para contar quantas vezes a palavra "maçã" aparece no array.
*/

let frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

let repetidas = frutas.reduce((acumulador, valorAtual) => 
  valorAtual === 'maçã' ? acumulador + 1 : acumulador
, 0);

console.log(`A fruta maçã aparece ${repetidas} vezes`);
