const express = require("express");

import router from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "console";
const app = express();

dotenv.config();

app.use(express.json());

app.use("/auth", router);

mongoose
  .connect(process.env.Mongo_Uri as string)
  .then(() => {
    console.log("Connected to databse");

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((err) => console.log(err.message));
