import express from "express";
import home from '../controllers/homeController.js';

// express router
const router = express.Router();

router.get('/', home);

export default router;