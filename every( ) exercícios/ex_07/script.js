let emails = ["teste@email.com", "usuario@gmail.com", "contatohotmail.com"];

// Use every() para verificar se todos os emails possuem "@"
// Mostre true ou false no console

let temArroba = emails.every((email) => email.includes('@'));

console.log(temArroba);

