import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  User: {
    email: { type: String, trim: true, required: true, unique: true },
    password:{type:String, required:true , min:6}
  },
});
export default mongoose.model("User",userSchema);