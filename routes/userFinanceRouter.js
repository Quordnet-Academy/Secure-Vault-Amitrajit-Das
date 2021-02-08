import express from "express";

import { getUserFinance, postUserFinance, putUserFinance, deleteUserFinance } from "../controllers/userFinanceController.js";

const router = express.Router();


// Career Routes
router.get("/userFinance", getUserFinance);
router.post("/userFinance", postUserFinance);
router.post("/userFinance/:id", putUserFinance);
router.post("/userFinance/:id", deleteUserFinance);

export default router;