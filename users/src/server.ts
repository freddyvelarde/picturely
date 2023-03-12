import app from "./app";

app.listen(app.get("port"), () =>
  console.log(`express server in running on port: ${app.get("port")}`)
);
