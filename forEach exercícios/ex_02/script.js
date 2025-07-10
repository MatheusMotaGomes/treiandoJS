/*
Desafio: Marcar presença em uma lista
Peça 5 nomes de alunos com prompt() e salve num array.
Com forEach(), pergunte via prompt() se o aluno está presente ("s" ou "n").
Ao final, exiba quem está presente e quem está ausente, separados.
*/

let nomes =[], presentes = [], ausentes = [], resposta;

for (let i = 0; i < 5; i++){
  let nome = prompt(`Qual o nome do(a) aluno(a) ${i + 1} ?`);
  nomes.push(nome);
}

nomes.forEach(function(aluno){
  resposta = confirm(`${aluno} está presente?`)
  if(resposta === true) {
    presentes.push(aluno);
  }else {
    ausentes.push(aluno);
  }
})

alert(`Alunos presentes : \n${presentes.join("\n")}`);
alert(`Alunos ausentes : \n${ausentes.join("\n")}`);
