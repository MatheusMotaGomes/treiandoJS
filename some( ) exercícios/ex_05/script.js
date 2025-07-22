//👉 Verifique se alguma palavra tem mais de 6 letras.

let palavras = ['sol', 'lua', 'mar', 'montanha'];

let maisQueSeis = palavras.some(palavra => palavra.length > 6);

console.log(maisQueSeis);
