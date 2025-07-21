/*
Use reduce() para criar uma string única com todos os nomes separados por vírgula e espaço, assim:
*/

let nomes = ['Ana', 'Pedro', 'Carlos', 'Maria'];

let nomesSeparados = nomes.reduce((acumulador, valorAtual, indice) => {
  return indice === 0 ? valorAtual : acumulador + ", " + valorAtual;
}, '');

console.log(nomesSeparados);
