import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  age: Number,
  createdAt: Date,
  updatedAt: Date,
});

const User = models.User || model("User", userSchema);

export default User;
