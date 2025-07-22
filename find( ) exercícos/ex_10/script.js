//Encontre a primeira pessoa com 18 anos ou mais.

let pessoas = [
  { nome: 'Carlos', idade: 15 },
  { nome: 'Mariana', idade: 17 },
  { nome: 'Roberto', idade: 20 },
  { nome: 'Julia', idade: 16 }
];

let maiorIdade = pessoas.find((pessoa) => {
  return pessoa.idade >= 18;
});

console.log(maiorIdade);
