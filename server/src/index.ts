import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routes/user";
import { todoRouter } from "./routes/todo";
import { requestDetails as requestDetailsLogger } from "./middlewares/requestDetails";
import { requestTime as requestTimeLogger } from "./middlewares/requestTime";
import { env } from './env';

const app: Express = express();
const port = env.app_port || 3000;

app.use(express.json());
app.use(cors());

app.use(requestDetailsLogger);
app.use(requestTimeLogger);

app.use("/users", userRouter);
app.use("/todo", todoRouter);

app.listen(port, () => console.log(`Server started at http://localhost:${port}/`));
