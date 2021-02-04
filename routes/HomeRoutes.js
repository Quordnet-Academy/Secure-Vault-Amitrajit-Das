import express from "express";
import { home_get, home_post } from "../controller/homeController.js";
const router = express.Router();

router.get("/", home_get);
router.post("/", home_post);

export default router;