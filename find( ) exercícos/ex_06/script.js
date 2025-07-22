//Encontre o primeiro produto com preço maior que 100.

let produtos = [
  { nome: 'camiseta', preco: 30 },
  { nome: 'calça', preco: 80 },
  { nome: 'sapato', preco: 150 },
  { nome: 'boné', preco: 25 }
];

let maiorQueCem = produtos.find((produto) => {
  return produto.preco > 100;
});

console.log(maiorQueCem);
