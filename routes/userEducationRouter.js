import express from "express";

import { getUserEducation, postUserEducation, putUserEducation, deleteUserEducation } from "../controllers/userEducationController.js";

const router = express.Router();


// Career Routes
router.get("/userEducation", getUserEducation);
router.post("/userEducation", postUserEducation);
router.post("/userEducation/:id", putUserEducation);
router.post("/userEducation/:id", deleteUserEducation);

export default router;