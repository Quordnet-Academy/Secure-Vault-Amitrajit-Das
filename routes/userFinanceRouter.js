import express from "express";

import { getUserFinance, postUserFinance } from "../controllers/userFinanceController.js";

const router = express.Router();


// Career Routes
router.get("/userFinance", getUserFinance);
router.post("/userFinance", postUserFinance);

export default router;