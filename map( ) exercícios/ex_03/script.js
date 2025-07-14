/*
Exercício 3 – Converter temperaturas
Dado o array de temperaturas em graus Celsius:
*/

let celsius = [0, 15, 22, 30, 35];

/*
Crie um novo array com as temperaturas convertidas para Fahrenheit.
A fórmula de conversão é: F = C * 1.8 + 32
Use .map() para aplicar essa fórmula em cada valor.
Mostre o array resultante com alert() e se quiser, formate com join(" ºF - ") pra deixar mais bonito
*/

let fahrenheit = celsius.map(function(numero){
  return numero * 1.8 + 32;
})

alert(fahrenheit.join("ºF - "));
