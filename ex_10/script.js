let frutas = ['banana', 'melancia', 'laranja', 'melancia', 'banana'];

for(let i = 0; i < frutas.length; i++){
  if(frutas[i] === 'melancia'){
    continue;
  }else{
    frutas[i] = 'morango'
  }
}

alert(frutas);
