/*
Crie um novo array contendo apenas as palavras que têm exatamente 3 letras.
*/

let palavras = ['sol', 'lua', 'mar', 'céu', 'rio', 'flor', 'paz'];

let tresLetras = palavras.filter((palavra) => palavra.length === 3)

console.log(tresLetras.join(" - "));

