import express from "express";

import { getUserCareer, postUserCareer } from "../controllers/userCareerController.js";

const router = express.Router();


// Career Routes
router.get("/userCareer", getUserCareer);
router.post("/userCareer", postUserCareer);

export default router;