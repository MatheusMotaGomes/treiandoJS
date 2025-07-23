let produtos = [
  { nome: "Notebook", preco: 900 },
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 }
];

// Verifique se todos os produtos custam menos de 1000 e mostre no console um resultado booleano

let orcamento = produtos.every((produto) => produto.preco < 1000);
console.log(orcamento);
