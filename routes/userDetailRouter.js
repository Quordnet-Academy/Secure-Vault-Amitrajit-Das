import express from "express";

import { getUserDetail, postUserDetail, putUserDetail, postUserDetailById, deleteUserDetail } from "../controllers/userDetailController.js";

const router = express.Router();


// Career Routes
router.get("/userDetail", getUserDetail);
router.post("/userDetail", postUserDetail);
router.post("/userDetail/login", postUserDetailById);
router.put("/userDetail/:id", putUserDetail);
router.delete("/userDetail/:id", deleteUserDetail);

export default router;