import { Router } from "../deps.ts";
import { getTodos, createTodo, toggleTodo } from "../controllers/todos.ts";

const router = new Router();

router
  .get("/todos", getTodos)
  .post("/todos", createTodo)
  .put("/todos/:id/toggle", toggleTodo);

export default router;
