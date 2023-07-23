const express = require("express");
import { Request, Response, NextFunction } from "express";
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

app.use((req: Request, res: Response, next: NextFunction) => {
  interface obj {
    error: string;
  }

  const obj = {
    error: "Invalid Pathname",
  };
  res.status(404).json(obj);
});

mongoose
  .connect(process.env.Mongo_Uri as string)
  .then(() => {
    console.log("Connected to databse");

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((err) => console.log(err.message));
