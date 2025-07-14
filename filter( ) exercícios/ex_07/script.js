/*
Crie um novo array apenas com as palavras que terminam com a letra "a" (minúscula mesmo).
Use .filter() e dentro da função use uma das duas abordagens:

.endsWith("a") — mais direto
ou

palavra.slice(-1) === "a" — usando fatia da última letra
*/

let palavras = ['casa', 'carro', 'mesa', 'janela', 'livro', 'porta'];

let palavraComA = palavras.filter((palavra) => palavra.endsWith("a"));

console.log(palavraComA.join(" - "));

