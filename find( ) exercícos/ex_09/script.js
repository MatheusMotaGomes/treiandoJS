//Encontre o primeiro email que termina com ".com".

let emails = ['teste@gmail.com', 'usuario@hotmail.com.br', 'contato@yahoo.com'];

let terminaCom = emails.find((email) => {
  return email.endsWith('.com');
});

console.log(terminaCom);
