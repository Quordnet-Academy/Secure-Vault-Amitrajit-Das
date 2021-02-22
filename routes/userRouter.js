import express from "express";
import { getUser,postUser } from '../controllers/userController.js';

// express router
const router = express.Router();

router.get('/user', getUser);
router.post('/user/login', postUser);

 export default router;