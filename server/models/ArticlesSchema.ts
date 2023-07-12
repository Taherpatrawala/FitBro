import mongoose from "mongoose";
import { Schema } from "mongoose";

const articleSchema = new Schema({
  title: { type: String, trim: true, required: true },
  imageUrl: { type: String, trim: true, required: true },
  content: { type: String, trime: true, required: true },
  access: {
    type: String,
    enum: ["Basic", "Standard", "Premium"], // enum means string objects that have to be one of the values in the array
    required: true,
  },
});

export default mongoose.model("Article", articleSchema);
