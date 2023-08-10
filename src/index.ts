import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/user";
import { requestDetails as requestDetailsLogger } from "./middlewares/requestDetails";
import { requestTime as requestTimeLogger } from "./middlewares/requestTime";

dotenv.config();

const app: Express = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());

app.use(requestDetailsLogger);
app.use(requestTimeLogger);

app.use("/users", userRouter);

app.listen(port, () => console.log(`Server started at http://localhost:${port}/`));
