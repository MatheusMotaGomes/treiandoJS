//👉 Verifique se alguma pessoa é maior de idade (18 anos ou mais).

let pessoas = [
  { nome: 'Lucas', idade: 15 },
  { nome: 'Fernanda', idade: 17 },
  { nome: 'João', idade: 22 }
];

let maioridade = pessoas.some(pessoa => pessoa.idade >= 18);

console.log(maioridade);
