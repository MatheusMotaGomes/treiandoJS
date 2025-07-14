/*
Exercício 1 – Filtrar números maiores que 10
Crie um novo array com apenas os números maiores que 10.
Use .filter() e mostre o resultado com alert() (ou join() se quiser formatar).

*/

let numeros = [5, 12, 8, 20, 3, 15];

let maiorQueDez = numeros.filter((valor) => valor > 10);

alert(maiorQueDez.join(" - "));
