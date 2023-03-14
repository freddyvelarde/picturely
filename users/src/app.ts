import express, { Application, Request, Response } from "express";
import morgan from "morgan";
require("./config/database");

const app: Application = express();

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
import userRouters from "./modules/users/routers/users.routers";
app.use(userRouters);

app.get("/", (_req: Request, res: Response) => {
  res.send({ message: "hello world from users microservices" });
});

export default app;
