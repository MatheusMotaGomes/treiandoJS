/*
Crie um novo array apenas com os nomes que começam com a letra "A", ignorando se estão em maiúsculas ou minúsculas.

Dica: use .charAt(0).toLowerCase() === 'a' dentro do .filter()
Exemplo de saída esperada:
["Ana", "Amanda", "alice"]
*/

let nomes = ['Ana', 'bruno', 'Amanda', 'Carlos', 'alice', 'Beatriz'];

let nomesLetraA = nomes.filter((nome) => nome.charAt(0).toLowerCase() === 'a');

console.log(nomesLetraA)