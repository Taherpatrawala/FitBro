import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true, min: 6 },
  customerStripeId: { type: String, required: true },
  googleId: { type: String },
});
export default mongoose.model("User", userSchema);
