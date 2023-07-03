import express from "express";
import { body, validationResult } from "express-validator";
import { stripe } from "../utils/stripe";
import CheckAuth from "../middlewares/checkAuth";

const subsRouter = express.Router();

subsRouter.get("/prices", async (req, res, next) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });
});

export default subsRouter;
