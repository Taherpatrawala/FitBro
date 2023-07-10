import mongoose from "mongoose";
import { Schema } from "mongoose";

const articleSchema = new Schema({
  title: { type: String, trim: true, required: true },
  imageUrl: { type: String, trim: true, required: true },
  content: { type: String, trime: true, required: true },
  access: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    required: true,
  },
});

export default mongoose.model("Article", articleSchema);
