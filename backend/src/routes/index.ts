import { Router } from 'express';
import userRouter from './user.routes';
import seedRouter from './seeder.routes';

const route = Router();

route.use('/portfolio', userRouter);
route.use('/seeders', seedRouter);

export default route;
