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

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: "Something went wrong" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Cannot found user with id " + id });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: "Cannot update user that doesn't exist!" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Cannont delete user that doesn't exist!" });
  }
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
