import { pool } from "../db";
import { NextFunction, Request, Response } from "express";
import { getAll, getById, create, update, deleteOne } from "../services/user.service";

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await getAll();
    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await getById(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await create({name, email});

    res.status(201).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await update(req.body, req.params.id);

    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await deleteOne(req.params.id);

    res.status(200).send(result);
  } catch (err) {
    console.error(`Error executing query ${(err as Error).stack}`);
    res.status(500).send({ error: "Something went wrong" });
  }
};

export { createUser, deleteUser, getUserById, updateUser, getUsers };
