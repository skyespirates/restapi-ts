import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";

import userRoute from "./routes/userRoute.js";

const PORT = process.env.PORT || 4000;
connectDB();

const app = express();

app.use(express.json());
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
