import express from "express";

import { getUserCareer, postUserCareer, postUserCareerById, putUserCareer, deleteUserCareer } from "../controllers/userCareerController.js";

const router = express.Router();


// Career Routes
router.get("/userCareer", getUserCareer);
router.post("/userCareer", postUserCareer);
router.post("/userCareer/:id", postUserCareerById);
router.put("/userCareer/:id", putUserCareer);
router.delete("/userCareer/:id", deleteUserCareer);

export default router;