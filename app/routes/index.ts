// importing files
import { ensureAuthenticated } from '~/middlewares/ensureAuthenticated';
import authenticationRoutes from '~/modules/authentication/http/routes/auth.routes';
import usersRoutes from '~/modules/authentication/http/routes/users.routes';
import tasksRoutes from '~/modules/tasks/http/routes/tasks.routes';
import { Router } from 'express';

import baseRoute from './base.routes';

const routes = Router();

// base route
routes.use(baseRoute);
routes.use(authenticationRoutes);
routes.use(ensureAuthenticated);
// authenticated routes
routes.use(usersRoutes);
routes.use(tasksRoutes);
export default routes;
