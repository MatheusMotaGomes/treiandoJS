/*
Dado este array de objetos (sim, vamos encarar objetos também, mas bem simples):
Crie um novo array apenas com as pessoas cuja idade seja maior ou igual a 18.
Dica: dentro do .filter(), você vai acessar pessoa.idade para fazer a comparação.
*/

let pessoas = [
  { nome: "João", idade: 16 },
  { nome: "Maria", idade: 21 },
  { nome: "Pedro", idade: 17 },
  { nome: "Ana", idade: 30 }
];

let maiorIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

console.log(maiorIdade);
