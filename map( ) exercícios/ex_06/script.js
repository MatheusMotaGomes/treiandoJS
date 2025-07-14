/*
Crie um novo array onde os números pares sejam multiplicados por 3, e os ímpares permaneçam iguais.
*/

let numeros = [2, 5, 8, 11, 14, 17];

let paresMultiplicados = numeros.map((valor) => {
  if(valor % 2 ==0 ){
    return valor * 3;
  }else{
    return valor;
  }
});

alert(paresMultiplicados.join(" - "));
