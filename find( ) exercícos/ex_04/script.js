//encontre a primeira palavra que começa com a letra "m"

let palavras = ['sol', 'lua', 'mar', 'montanha', 'rio'];

let letraM = palavras.find((palavra) => {
  return palavra.startsWith("m");
});

console.log(letraM);
