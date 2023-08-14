import express from 'express';

const userRouter = express.Router();

import { getUsers, createUser, deleteUser, updateUser, getUserById } from '../../server/src/controllers/user.controller';

userRouter
  .get("/", getUsers)
  .get("/:id", getUserById)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export { userRouter };