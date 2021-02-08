import express from "express";

import { getUserDetail, postUserDetail, putUserDetail, deleteUserDetail } from "../controllers/userDetailController.js";

const router = express.Router();


// Career Routes
router.get("/userDetail", getUserDetail);
router.post("/userDetail", postUserDetail);
router.put("/userDetail/:id", putUserDetail);
router.delete("/userDetail/:id", deleteUserDetail);

export default router;