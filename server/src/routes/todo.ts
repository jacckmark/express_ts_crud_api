import express from 'express';

const todoRouter = express.Router();

import { createTodo, deleteTodo, getTodoByEmail, getTodos, updateTodo} from '../controllers/todo.controller';

todoRouter
  .get("/", getTodos)
  .get("/:email", getTodoByEmail)
  .post("/", createTodo)
  .put("/:id", updateTodo)
  .delete("/:id", deleteTodo);

export { todoRouter };