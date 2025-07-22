//👉 Verifique se algum email termina com ".br".

let emails = ['teste@gmail.com', 'usuario@hotmail.com.br', 'contato@yahoo.com'];

let terminaCom = emails.some(email => email.endsWith(".br"));

console.log(terminaCom);
