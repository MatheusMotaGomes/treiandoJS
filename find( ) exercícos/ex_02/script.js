//Encontre a primeira fruta cujo nome tenha mais de 5 letras.

let frutas = ['maçã', 'banana', 'uva', 'laranja', 'manga', 'abacaxi'];

let maiorQueCinco = frutas.find((fruta) => {
  return fruta.length > 5;
});

console.log("A primeira fruta que tem mais que 5 letras é : " + maiorQueCinco);

