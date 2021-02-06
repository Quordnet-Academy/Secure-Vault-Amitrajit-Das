import express from "express";

import { getUserDetail, postUserDetail } from "../controllers/userDetailController.js";

const router = express.Router();


// Career Routes
router.get("/userDetail", getUserDetail);
router.post("/userDetail", postUserDetail);

export default router;