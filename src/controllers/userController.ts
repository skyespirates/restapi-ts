import User from "../models/userModel.js";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;

    const userExists = await User.findOne({ name });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists!");
    }

    const user = await User.create({ name, age });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        age: user.age,
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data!");
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export { createUser, getUsers };
