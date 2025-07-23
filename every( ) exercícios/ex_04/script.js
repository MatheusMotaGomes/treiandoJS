let palavras = ["casa", "carro", "rua", "Cidade"];
// Verifique se todas estão em letras minúsculas

let todasMinusculas = palavras.every((palavra) => palavra === palavra.toLocaleLowerCase());

console.log(todasMinusculas);
