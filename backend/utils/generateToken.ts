import jwt from "jsonwebtoken";
import { Response } from "express";
import { Types } from "mongoose";

const generateToken = (res: Response, userId: Types.ObjectId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 1 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
