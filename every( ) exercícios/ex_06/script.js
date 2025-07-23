let tarefas = [
  { titulo: "Lavar a louça", concluida: true },
  { titulo: "Varrer a casa", concluida: false },
  { titulo: "Fazer compras", concluida: true }
];

// Use every() para verificar se todas as tarefas estão concluídas
// Mostre true ou false no console

let concluidas = tarefas.every((tarefa) => tarefa.concluida);

console.log(concluidas);

