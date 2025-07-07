let frutas = ['banana', 'maçã', 'banana', 'laranja'];

let index = frutas.indexOf('banana');

while(index !== -1){
  frutas.splice(index + 1, 0, 'pêssego');
  index = frutas.indexOf('banana' , index + 2);
}

alert(frutas);
