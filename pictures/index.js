import express from "express";
import morgan from "morgan";
const app = express();
import axios from "axios";
app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  axios
    // .get("https://jsonplaceholder.typicode.com/users")
    .get("http://users:5000/users")
    .then((response) => {
      res.send({ message: "express app", data: response.data });
    })
    .catch((e) => console.error(e));

  // res.json({
  //   message: `express server in running on port: ${app.get("port")}`,
  //   joke: "yes the docker network is working :)",
  // });
});

app.get("/all", (_req, res) =>
  res.json({ message: `all users not added yet` })
);

app.listen(app.get("port"), () =>
  console.log(`express server in running on port: ${app.get("port")}`)
);
