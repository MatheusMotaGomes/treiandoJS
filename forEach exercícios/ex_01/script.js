let convidados = [];

for (let i = 0; i < 3; i++){
  let nome = prompt(`qual o nome do convidado ${i + 1} ?`);
  convidados.push(nome);
}

convidados.forEach(function(nome, indice){
  
  alert(`Convidado ${indice + 1} : ${nome}`);
});


/*
Objetivo:
Peça 3 nomes de convidados com prompt() e armazene num array.
Use forEach() para exibir todos os nomes com alert()
*/
