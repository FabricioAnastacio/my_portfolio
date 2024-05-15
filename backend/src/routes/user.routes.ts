import { Router } from 'express';
import UserController from '../controller/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.get('/:id', (req, res) => userController.findUser(req, res));
userRouter.post('/');
userRouter.put('/:id');

export default userRouter;
