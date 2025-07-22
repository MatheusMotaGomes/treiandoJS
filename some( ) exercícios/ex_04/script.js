//👉 Verifique se algum produto custa mais de 100.


let produtos = [
  { nome: 'camiseta', preco: 30 },
  { nome: 'calça', preco: 80 },
  { nome: 'sapato', preco: 150 }
];

let produtoCaro = produtos.some(produto => produto.preco > 100);

console.log(produtoCaro);
