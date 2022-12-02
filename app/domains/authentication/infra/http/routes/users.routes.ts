import { Router } from 'express';

import { UpdateUserController } from '../../use-cases/updateUser/UpdateUserController';
import { updateUser } from '../middlewares/users.validators';

const routes = Router();

routes.put('/users/:id/update', updateUser, new UpdateUserController().handle);

export default routes;
