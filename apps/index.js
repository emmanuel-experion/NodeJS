import { Router } from 'express';
import managerRoutes from './projectManager/routes.js';
import accountsRoute from './public/routes.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = new Router();
router.use('/login', accountsRoute);
router.use('/manager', authMiddleware, managerRoutes);

export default router;
