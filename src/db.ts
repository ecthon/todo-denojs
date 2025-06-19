import { DB } from "./deps.ts";

const db = new DB("todos.db");

db.execute(`
  CREATE TABLE IF NOT EXISTS todos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    completed INTEGER NOT NULL
  )
`);

export default db;
