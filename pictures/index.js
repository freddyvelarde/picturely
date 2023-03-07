import express from "express";
import morgan from "morgan";
const app = express();
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));

app.get("/", (_req, res) =>
  res.json({ message: `express server in running on port: ${app.get("port")}` })
);

app.get("/all", (_req, res) =>
  res.json({ message: `all users not added yet` })
);

app.listen(app.get("port"), () =>
  console.log(`express server in running on port: ${app.get("port")}`)
);
