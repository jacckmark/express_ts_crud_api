import { pool } from "../configs/db";
import { emptyOrRows, recheckEmailFormat } from "../utils/helper";
import { todo } from "../models/todo";
import { v4 as uuid } from "uuid";

export const getAll = async () => {
  const result = await pool.query("SELECT * FROM todos");
  const data = emptyOrRows(result.rows);
  return { data };
};

export const getByEmail = async (email: string) => {
  const formatErrMsg = recheckEmailFormat(email, "get todo");
  if (formatErrMsg) return formatErrMsg;

  const result = await pool.query("SELECT * FROM todos WHERE user_email = $1", [email]);
  const data = emptyOrRows(result.rows);
  return { data };
};

export const create = async (todo: todo) => {
  const id = uuid();
  const result = await pool.query(
    "INSERT INTO todos (id, user_email, title, progress, date) VALUES ($1, $2, $3,$4,$5) RETURNING *",
    [id, todo.user_email, todo.title, todo.progress, todo.date]
  );

  if (result.rowCount) return { message: `New todo with ID "${result.rows[0].id}" created` };

  return "Error when trying to add new todo";
};

export const update = async (todo: todo, id: string) => {
  const result = await pool.query(
    "UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5",
    [todo.user_email, todo.title, todo.progress, todo.date, id]
  );

  if (result.rowCount) return { message: `Todo with ID "${id}" modified` };

  return `Error when trying to update todo with ${id}`;
};

export const deleteOne = async (id: string) => {
  const result = await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  if (result.rowCount) return { message: `Todo with ID ${id} deleted` };

  return `Error when trying to delete todo with ${id}`;
};
