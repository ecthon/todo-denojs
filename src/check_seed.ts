import db from "./db.ts";

// Verificando os dados inseridos
const todos = db.query("SELECT id, title, completed FROM todos");

console.log("📋 TODOs inseridos:");
for (const todo of todos) {
  console.log(`- ID: ${todo[0]}, Título: ${todo[1]}, Concluído: ${todo[2] ? 'Sim' : 'Não'}`);
}

db.close(); 