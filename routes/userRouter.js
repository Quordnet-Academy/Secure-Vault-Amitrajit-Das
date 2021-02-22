import express from "express";
import { userSignup, userLogin } from '../controllers/userController.js';

// express router
const router = express.Router();

router.get('/user/signup', userSignup);
router.post('/user/login', userLogin);

 export default router;