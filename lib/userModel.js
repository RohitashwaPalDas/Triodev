import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  profilePic: String,
  password: String,
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
