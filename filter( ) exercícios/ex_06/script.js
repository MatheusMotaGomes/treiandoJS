/*
Crie um novo array contendo apenas os preços menores que R$50.
Use .filter() e exiba o resultado no console com console.log() ou join() se quiser formatar.
45.5 - 32.99 - 25
*/

let precos = [120.00, 45.50, 32.99, 80.00, 25.00];

let menorQueCiquenta = precos.filter((preco) => preco < 50);

console.log(menorQueCiquenta.join(" - "));

