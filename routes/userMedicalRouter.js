import express from "express";

import { getUserMedical, postUserMedical, postUserMedicalById, putUserMedical, deleteUserMedical } from "../controllers/userMedicalController.js";

const router = express.Router();


// Career Routes
router.get("/userMedical", getUserMedical);
router.post("/userMedical", postUserMedical);
router.post("/userMedical/login", postUserMedicalById);
router.put("/userMedical/:id", putUserMedical);
router.delete("/userMedical/:id", deleteUserMedical);

export default router;