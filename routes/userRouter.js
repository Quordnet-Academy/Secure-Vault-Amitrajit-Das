import express from "express";
import {userGet, userPost} from '../controllers/userController.js';

// express router
const router = express.Router();

router.get('/user', userGet);
router.post('/user', userPost);

export default router;