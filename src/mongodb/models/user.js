import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: { type: String, required: true },
  avatar: { type: String, required: true },
});

const userSchema = mongoose.model("User", User);

export default userSchema;
