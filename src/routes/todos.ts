import { Router } from "../deps.ts";
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.ts";

const router = new Router();

router
  .get("/todos", getTodos)
  .post("/todos", createTodo)
  .put("/todos/:id/toggle", toggleTodo)
  .delete("/todos/:id", deleteTodo)
  .put("/todos/:id", updateTodo);

export default router;
