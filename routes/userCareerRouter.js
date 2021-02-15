import express from "express";

import { getUserCareer, postUserCareer, postUserCareerPassword, putUserCareer, deleteUserCareer } from "../controllers/userCareerController.js";

const router = express.Router();


// Career Routes
router.get("/userCareer", getUserCareer);
router.post("/userCareer", postUserCareer);
router.post("/userCareer/login", postUserCareerPassword);
router.put("/userCareer/:id", putUserCareer);
router.delete("/userCareer/:id", deleteUserCareer);

export default router;