import { Router } from 'express';
import seedersUser from '../database/seeders/user';

const seedRouter = Router();

seedRouter.use('/', async (req, res) => {
  await seedersUser();

  return res.status(201).json({ message: 'seeders update' });
});

export default seedRouter;
