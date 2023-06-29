import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 4000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users/", userRoute);
app.use("/api/products/", productRoute);
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
