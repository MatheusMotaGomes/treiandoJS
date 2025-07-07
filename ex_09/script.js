let frutas = ['uva', 'banana', 'uva', 'laranja', 'maçã', 'uva'];

let contador = 0;

for(let i = 0; i < frutas.length; i++){
  if(frutas[i] == 'uva'){
    contador++
  }
}

alert(`A fruta uva apareceu ${contador} vez(es)`);
