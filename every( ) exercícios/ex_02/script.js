/*
Verifique se todos os alunos foram aprovados considerando que a nota mínima é 7.
Mostre no console:

"Todos aprovados" se for verdade

"Há alunos reprovados" caso contrário.
*/

let notas = [8, 7.5, 9, 10, 6.8];

let aprovados = notas.every((nota) => nota >= 7);

if(aprovados) {
  console.log("Todos aprovados")
} else {
  console.log("Há alunos reprovados")
};

