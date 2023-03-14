import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UploadImages } from "../../../helpers/upload.images";
import User from "../model/users.model";

// sign up
export const createNewUsers = async (req: Request, res: Response) => {
  try {
    const { full_name, email, password, bio, avatar, avatar_id } = req.body;
    // verify if user does exist
    const user = await User.findOne({ email }).exec();
    if (user) {
      return res.json({ message: "user already exists" });
    }

    // upload images
    if (req.file === undefined) {
      return res.send("image not found");
    }
    const uploadImages = new UploadImages(req.file?.path);
    const responseCloudinary = await uploadImages.uploadImages();
    if (!responseCloudinary.response) {
      return res.send({ message: "Something went wrong uploading your image" });
    }
    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user in database
    const newUser = new User({
      full_name,
      email,
      password: hashedPassword,
      bio,
      avatar: responseCloudinary.img_url,
      avatar_id: responseCloudinary.img_id,
    });
    await newUser.save();
    res.send("users was created");

    // give a token auth
  } catch (err) {
    res.send({ error: err });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    // if (users.length <= 1) {
    //   return res.json({ message: "There's no users added yet!" });
    // }
    res.json(users);
  } catch (e) {
    console.error(e);
  }
};
