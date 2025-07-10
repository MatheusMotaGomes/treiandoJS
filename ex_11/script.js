let nomes = [];
let somador = 1;
while(somador < 4){
  nomes.push(prompt(`Digite o nome ${somador} :`));
  somador++
}

alert(nomes.join(" , "));
