import express from "express";

import { getUserMedical, postUserMedical } from "../controllers/userMedicalController.js";

const router = express.Router();


// Career Routes
router.get("/userMedical", getUserMedical);
router.post("/userMedical", postUserMedical);

export default router;