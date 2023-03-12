import express, { Application, Request, Response } from "express";
import morgan from "morgan";
const app: Application = express();
require("./config/database");
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));
app.use(express.json());

// routes
import userRouters from "./modules/routers/users.routers";
app.use("/", userRouters);

app.get("/", (_req: Request, res: Response) => {
  res.send({ message: "hello world from users microservices" });
});

export default app;
