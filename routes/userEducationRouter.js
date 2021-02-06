import express from "express";

import { getUserEducation, postUserEducation } from "../controllers/userEducationController.js";

const router = express.Router();


// Career Routes
router.get("/userEducation", getUserEducation);
router.post("/userEducation", postUserEducation);

export default router;