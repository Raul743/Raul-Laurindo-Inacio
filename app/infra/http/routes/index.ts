// importing files

import authenticationRoutes from '~/domains/authentication/infra/http/routes/auth.routes';
import usersRoutes from '~/domains/authentication/infra/http/routes/users.routes';
import tasksRoutes from '~/domains/tasks/infra/http/routes/tasks.routes';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routes = Router();

// base route
routes.use(authenticationRoutes);
routes.use(ensureAuthenticated);
// authenticated routes
routes.use(usersRoutes);
routes.use(tasksRoutes);
export default routes;
