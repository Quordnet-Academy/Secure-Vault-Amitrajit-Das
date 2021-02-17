import express from "express";

import { getUserFinance, postUserFinance, postUserFinanceById, putUserFinance, deleteUserFinance } from "../controllers/userFinanceController.js";

const router = express.Router();


// Career Routes
router.get("/userFinance", getUserFinance);
router.post("/userFinance", postUserFinance);
router.post("/userFinance/login", postUserFinanceById);
router.put("/userFinance/:id", putUserFinance);
router.delete("/userFinance/:id", deleteUserFinance);

export default router;