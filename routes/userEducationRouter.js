import express from "express";

import { getUserEducation, postUserEducation, patchUserEducation, postUserEducationPassword, deleteUserEducation } from "../controllers/userEducationController.js";

const router = express.Router();


// Career Routes
router.get("/userEducation", getUserEducation);
router.post("/userEducation", postUserEducation);
router.post("/userEducation/login", postUserEducationPassword);
router.patch("/userEducation/:id", patchUserEducation);
router.post("/userEducation/:id", deleteUserEducation);

export default router;