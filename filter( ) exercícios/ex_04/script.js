/*Crie um novo array com as palavras que tenham mais de 5 letras.*/

let palavras = ['amor', 'sol', 'felicidade', 'lua', 'estrela', 'mar'];

let palavrasMaiores = palavras.filter((palavra) => palavra.length > 5);

console.log(palavrasMaiores.join(" - "));
