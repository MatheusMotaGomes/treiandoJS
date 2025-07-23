/*
Verifique se todos os produtos custam menos de R$1000.
Mostre:

"Todos os produtos estão dentro do orçamento"
ou

"Algum produto ultrapassa o orçamento".
*/

let produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 }
];

let orcamento = produtos.every((produto) => produto.preco < 1000);

if(orcamento) {
  console.log("Todos os produtos estão dentro do orçamento");
} else {
  console.log("Algum produto ultrapassa o orçamento")
};
