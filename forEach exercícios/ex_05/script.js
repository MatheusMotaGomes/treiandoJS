/*
 Exercício 5 – Exibir lista numerada de tarefas
 Dica: você pode usar o segundo parâmetro do forEach (o índice).
*/

let tarefas = ["Lavar roupa", "Estudar JavaScript", "Ir ao mercado", "Treinar boxe"];
// Use forEach para exibir um alert para cada tarefa no seguinte formato:
// Tarefa 1: Lavar roupa
// Tarefa 2: Estudar JavaScript
// ...

tarefas.forEach(function(tarefa, indiceTarefa){
  alert(`Tarefa ${indiceTarefa + 1} : ${tarefa}`)
})
