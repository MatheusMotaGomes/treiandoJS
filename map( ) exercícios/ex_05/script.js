/*
Crie um novo array onde todos os nomes fiquem em letras maiúsculas, independentemente de como estão escritos.

Use o método .toUpperCase() dentro do .map().

Exiba o resultado com alert() e formate com join(", ") pra listar tudo numa linha.
*/

let nomes = ['ana', 'Bruno', 'carlos', 'DÉBORA', 'elena'];

let nomesMaisculos = nomes.map((nome) => {
  return nome.toLocaleUpperCase();
})

alert(nomesMaisculos.join(" - "));
