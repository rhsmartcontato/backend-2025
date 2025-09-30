import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes.js';
import paymentRoutes from './paymentRoutes.js';

router.use('/users', userRoutes);
router.use('/payments', paymentRoutes);

router.get('/', (req, res) => {
  res.send('API Root');
});

export default router;
