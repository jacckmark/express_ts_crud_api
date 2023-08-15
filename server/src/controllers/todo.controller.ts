import { Request, Response } from "express";
import { getAll, create, update, deleteOne, getByEmail } from "../services/todo.service";

const getTodos = async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const getTodoByEmail = async (req: Request, res: Response) => {
  try {
    const result = await getByEmail(req.params.email);
    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const createTodo = async (req: Request, res: Response) => {
  try {
    const date = new Date().toISOString();
    const { user_email, title, progress } = req.body;
    const result = await create({date, user_email, title, progress});
    res.status(201).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const result = await update(req.body, req.params.id);

    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await deleteOne(req.params.id);

    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

export { createTodo, updateTodo, deleteTodo, getTodoByEmail, getTodos };
