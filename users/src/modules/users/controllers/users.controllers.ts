import { Request, Response } from "express";
import User from "../model/users.model";

// sign up
export const createNewUsers = async (req: Request, res: Response) => {
  try {
    // const { full_name, email, password, bio } = req.body;
    const { email } = req.body;
    // verify if user does exist
    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.json({ message: "user already exists" });
    }
    res.send(req.file);

    // upload images
    // create the user in database
    // encrypt password
    // give a token auth
  } catch (err) {
    res.send(err);
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (users.length <= 1) {
      return res.json({ message: "There's no users added yet!" });
    }
    res.json(users);
  } catch (e) {
    console.error(e);
  }
};
