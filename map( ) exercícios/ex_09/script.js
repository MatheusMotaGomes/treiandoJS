/*
Crie um novo array onde cada preço tenha 20% de desconto aplicado.
Dica para aplicar o desconto:
preco * 0.8
Além disso, formate cada preço para ter duas casas decimais, usando .toFixed(2).
Exemplo de saída:
80.00 - 40.00 - 64.00 - 96.00
*/

let precos = [100, 50, 80, 120];

let descontos = precos.map((valor => {
  return (valor * 0.8).toFixed(2);

}));

alert(descontos.join(" - "));
