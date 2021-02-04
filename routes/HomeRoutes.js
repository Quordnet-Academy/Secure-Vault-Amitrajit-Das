import { Router } from 'express';
import vaultController from '../controllers/vaultController';

const router = Router();

router.get('/home', vaultController.home_get);
router.post('/home', vaultController.home_post);

export default router;