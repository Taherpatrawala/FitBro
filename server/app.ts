const express = require("express");
import { Request, Response, NextFunction } from "express";
import router from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import subsRouter from "./routes/subs";
import passport from "passport";
import "./routes/google";
const session = require("express-session");

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

app.use("/auth", router);

app.use("/subs", subsRouter);

app.use(session({ secret: process.env.JWT_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/failure",
  })
);

app.get("/protected", (req: Request, res: Response, next: NextFunction) => {
  res.send(console.log("User" + req.user));
});

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
