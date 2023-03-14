import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
  },
  avatar_id: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
