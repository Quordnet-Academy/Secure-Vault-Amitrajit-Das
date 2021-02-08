import express from "express";

import { getUserMedical, postUserMedical, putUserMedical, deleteUserMedical } from "../controllers/userMedicalController.js";

const router = express.Router();


// Career Routes
router.get("/userMedical", getUserMedical);
router.post("/userMedical", postUserMedical);
router.post("/userMedical/:id", putUserMedical);
router.post("/userMedical/:id", deleteUserMedical);

export default router;