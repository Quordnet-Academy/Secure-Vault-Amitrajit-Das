import express from "express";
const router = express.Router();
import {user_get, user_post} from "../controller/userController.js";

router.get("/user", user_get);
router.post("/user", user_post);

export default router;