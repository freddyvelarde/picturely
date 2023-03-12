import express, { Application, Response, Request } from "express";
import morgan from "morgan";
const app: Application = express();
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));
app.use(express.json());

import usersRouters from "./modules/routers/users.routers";
app.use("/", usersRouters);
// app.get("/", (_req: Request, res: Response) => {
//   res.json({
//     message: `express server in running on port: ${app.get("port")}`,
//     joke: "yes the docker network is working :)",
//   });
// });

// app.get("/all", (_req, res) =>
//   res.json({ message: `all users not added yet` })
// );

export default app;
