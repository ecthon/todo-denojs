import { Context } from "../deps.ts";
import { Todo } from "../models/todo.ts";
import { generate } from "../deps.ts";

const todos: Todo[] = [];

export const getTodos = (ctx: Context) => {
  ctx.response.body = todos;
};

export const createTodo = async (ctx: Context) => {
  const { title } = await ctx.request.body({ type: "json" }).value;
  const newTodo: Todo = { id: generate(), title, completed: false };
  todos.push(newTodo);
  ctx.response.body = newTodo;
  ctx.response.status = 201;
};

export const toggleTodo = (ctx: Context) => {
  const { id } = ctx.params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
    return;
  }
  todo.completed = !todo.completed;
  ctx.response.body = todo;
};
