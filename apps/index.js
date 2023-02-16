import { Router } from 'express';
import managerRoutes from './projectManager/routes.js';
import accountsRoute from './public/routes.js';

const router = new Router();
router.use('/api/v1', accountsRoute);
router.use('api/v1/manager', managerRoutes);

export default router;
