import { Router } from "express";
const router = Router();

import { getProduct } from "../controllers/productController.js";

router.post("/", getProduct);

export default router;
