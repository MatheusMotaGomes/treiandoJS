/*
Crie um novo array apenas com os nomes que têm mais de uma palavra (ou seja, que têm um espaço entre os nomes).

💡 Dica: use nome.includes(" ") dentro do .filter() para detectar nomes compostos.

Exemplo de saída:
João Pedro - Carlos Eduardo
*/

let nomes = ['Maria', 'João Pedro', 'Ana', 'Carlos Eduardo', 'Beatriz'];

let nomesCompostos = nomes.filter((nome) => nome.includes(" "));

console.log(nomesCompostos.join(" - "));

