 //Encontre o primeiro nome com mais de 8 letras.

let nomes = ['Ana', 'Bruno', 'Catarina', 'Leonardo', 'Fernanda', 'João'];

let maiorQueOito = nomes.find((nome) => {
  return nome.length > 8;
});

console.log(maiorQueOito);
