import express from "express";
import { body, validationResult } from "express-validator";
import { stripe } from "../utils/stripe";
import CheckAuth from "../middlewares/checkAuth";

const subsRouter = express.Router();

subsRouter.get("/prices", CheckAuth, async (req, res, next) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });
  return res.json(prices);
});

subsRouter.post("/session", CheckAuth, async (req, res, next) => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: req.body.priceId,
        quantity: 1,
      },
    ],
    success_url: "http://localhost:5173/articles",
    cancel_url: "http://localhost:5173/articles-plans",
  });
});

export default subsRouter;
