import { Router } from 'express';
import vaultController from '../controllers/vaultController';

const router = Router();

router.get('/user', vaultController.user_get);
router.post('/user', vaultController.user_post);

export default router;