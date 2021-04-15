import Express from 'express';
import HealthcheckController from './controllers/HealthcheckController';
import RegisterClassController from './controllers/RegisterClassController';

const router = Express.Router();

router.use('/', HealthcheckController);
router.use('/', RegisterClassController);

export default router;
