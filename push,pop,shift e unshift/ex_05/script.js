let frutas = ['maçã', 'banana', 'laranja', 'banana', 'uva', 'banana'];

for(let i = 0; i < frutas.length; i++){
  if(frutas[i] === 'banana'){
    frutas[i] = 'morango'
  }
}

alert(frutas);
