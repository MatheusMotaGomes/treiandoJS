let frutas = ['maçã', 'laranja', 'banana', 'laranja', 'uva', 'laranja'];

let index = frutas.indexOf('laranja');

while(index !== -1){
  frutas.splice(index, 1, 'removido');
  index = frutas.indexOf('laranja');
}

alert(frutas);
