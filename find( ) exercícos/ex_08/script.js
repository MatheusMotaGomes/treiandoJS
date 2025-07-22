//Encontre o primeiro número divisível por 7.

let numeros = [5, 11, 14, 22, 35, 40];

let divisivel = numeros.find((numero) => {
  return (numero % 7) === 0;
});


console.log(divisivel);
