import mongoose from "mongoose";

const connectionURL =
  process.env.ME_CONFIG_MONGODB_URL ||
  "mongodb://admin:admin@mongo:27017/usersdb?authSource=admin";
//"mongodb://mongo/usersdb" "mongodb://mongo/usersdb";
mongoose
  .connect(connectionURL)
  .then((db) => console.log("database connected to: ", db.connection.host))
  .catch((err) => console.error(err));
