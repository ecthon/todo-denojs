import { Context } from "../deps.ts";
import db from "../db.ts";
import { generate } from "../deps.ts";
import { Todo } from "../models/todo.ts";

export const getTodos = (ctx: Context) => {
  const results = [...db.query("SELECT id, title, completed FROM todos")];
  const todos: Todo[] = results.map(([id, title, completed]) => ({
    id: id as string,
    title: title as string,
    completed: !!completed,
  }));

  ctx.response.body = todos;
};

export const createTodo = async (ctx: Context) => {
  const { title } = await ctx.request.body({ type: "json" }).value;
  const id = generate();
  db.query("INSERT INTO todos (id, title, completed) VALUES (?, ?, ?)", [id, title, 0]);

  ctx.response.status = 201;
  ctx.response.body = { id, title, completed: false };
};

export const toggleTodo = (ctx: Context) => {
  const url = new URL(ctx.request.url);
  const id = url.pathname.split('/')[2]; // /todos/:id/toggle
  
  if (!id) {
    ctx.response.status = 400;
    ctx.response.body = { message: "ID is required" };
    return;
  }
  
  const result = [...db.query("SELECT completed FROM todos WHERE id = ?", [id])];

  if (result.length === 0) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }

  const completed = result[0][0] ? 0 : 1;
  db.query("UPDATE todos SET completed = ? WHERE id = ?", [completed, id]);

  ctx.response.body = { id, completed: !!completed };
};
