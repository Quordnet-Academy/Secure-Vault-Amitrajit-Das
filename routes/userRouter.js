import express from "express";
import { postUser } from '../controllers/userController.js';

// express router
const router = express.Router();

 router.post('/user/login', postUser);

 export default router;