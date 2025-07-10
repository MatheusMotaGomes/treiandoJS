/*
  Crie um array vazio chamado fila.

  Peça nomes com prompt() até o usuário digitar "fim".

  Use unshift() para adicionar os nomes no início da fila.

  Depois, use shift() para remover um por um, mostrando quem está sendo atendido.
*/

let fila = [];
let resposta = true;
let atendido;

do{
  let nome = prompt("Qual nome deseja adicionar à fila ?");
  fila.unshift(nome);
  resposta = confirm("Deseja adicionar mais algum nome?");
}while(resposta === true)

alert(`Fila: \n${fila.join("\n")}`)

while(fila.length > 0){
  atendido = fila.shift();
  alert(`Atendido : ${atendido} \nFila restante: \n${fila.join(" \n")}`)
}
