import db from "./db.ts";
import { generate } from "./deps.ts";

const todos = [
  { id: generate(), title: "Estudar Deno", completed: 0 },
  { id: generate(), title: "Criar API de TODO", completed: 0 },
  { id: generate(), title: "Testar SQLite com Deno", completed: 1 },
];

// Limpando a tabela antes de inserir (opcional)
db.query("DELETE FROM todos");

// Inserindo os dados
for (const todo of todos) {
  db.query("INSERT INTO todos (id, title, completed) VALUES (?, ?, ?)", [
    todo.id,
    todo.title,
    todo.completed,
  ]);
}

console.log("🫛 Seed executado com sucesso!");
db.close();
