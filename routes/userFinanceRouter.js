import express from "express";

import { getUserFinance, postUserFinance, postUserFinancePassword, putUserFinance, deleteUserFinance } from "../controllers/userFinanceController.js";

const router = express.Router();


// Career Routes
router.get("/userFinance", getUserFinance);
router.post("/userFinance", postUserFinance);
router.post("/userFinance/login", postUserFinancePassword);
router.put("/userFinance/:id", putUserFinance);
router.delete("/userFinance/:id", deleteUserFinance);

export default router;