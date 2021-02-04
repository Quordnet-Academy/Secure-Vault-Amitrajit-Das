import express from "express";
const router = express.Router();
import {userGet, userPost} from "../controller/userPostController.js";

router.get("/user", user_get);
router.post("/user", user_post);

export default router;