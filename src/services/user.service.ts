import { pool } from "../db";
import { emptyOrRows, recheckIdFormat } from "../utils/helper";
import { user } from "../models/user";

export const getAll = async () => {
  const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
  const data = emptyOrRows(result.rows);
  return { data };
};

export const getById = async (id: string) => {
  const formatErrMsg = recheckIdFormat(id, "get user");
  if (formatErrMsg) return formatErrMsg;

  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  const data = emptyOrRows(result.rows);
  return { data };
};

export const create = async (user: user) => {
  const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [
    user.name,
    user.email
  ]);

  console.log(result);

  if (result.rowCount) return { message: `New user with ID ${result.rows[0].id} created` };

  return "Error when trying to add new user";
};

export const update = async (user: user, id: string) => {
  const formatErrMsg = recheckIdFormat(id, "update user");
  if (formatErrMsg) return new Error(formatErrMsg);

  const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
    user.name,
    user.email,
    id
  ]);

  if (result.rowCount) return { message: `User with ID ${id} modified` };

  return `Error when trying to update user with ${id}`;
};

export const deleteOne = async (id: string) => {
  const formatErrMsg = recheckIdFormat(id, "delete user");
  if (formatErrMsg) return formatErrMsg;

  const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
  if (result.rowCount) return { message: `User with ID ${id} deleted` };

  return `Error when trying to delete user with ${id}`;
};
