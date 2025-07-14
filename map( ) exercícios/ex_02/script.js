/*
Crie um novo array onde cada nota seja aumentada em 10 pontos, usando .map().
Mostre o resultado com alert().
*/

let notas = [65, 70, 58, 90, 83];

let dezPontos = notas.map(function(numero){
  return numero + 10;
});

alert(dezPontos.join(" - "));
