import { Request, Response } from "express";
import User from "../model/users.model";

export const createNewUsers = async (_req: Request, res: Response) => {
  try {
    await User.create({name: "Freddy Velarde", email: "fredd@gmail.com", password: "qwerty"});
    res.send("user was created");
  } catch (err) {
    res.send(err);
  }
}

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    console.error(e);
  }
};
