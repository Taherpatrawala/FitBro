const express = require("express");

import router from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import subsRouter from "./routes/subs";
const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

app.use("/auth", router);

app.use("/subs", subsRouter);

mongoose
  .connect(process.env.Mongo_Uri as string)
  .then(() => {
    console.log("Connected to databse");

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((err) => console.log(err.message));
