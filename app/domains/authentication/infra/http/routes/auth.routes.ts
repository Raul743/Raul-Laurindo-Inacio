import { Router } from 'express';

import { CreateUserController } from '../../use-cases/createUser/CreateUserController';
import { LoginController } from '../../use-cases/login/LoginController';
import { createUser, loginUser } from '../middlewares/users.validators';

const routes = Router();

routes.post('/auth/register', createUser, new CreateUserController().handle);
routes.post('/auth/login', loginUser, new LoginController().handle);

export default routes;
