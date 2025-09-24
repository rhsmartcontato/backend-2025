import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import userController from '../controllers/userController.js';


router.use('/', userRoutes);
router.use('/', paymentRoutes);
router.use('/', userController);

export default router;