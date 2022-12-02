// importing files

import { ensureAuthenticated } from '~/middlewares/ensureAuthenticated';
import authenticationRoutes from '~/modules/authentication/infra/routes/auth.routes';
import { Router } from 'express';

import baseRoute from './base.routes';

const routes = Router();

// base route
routes.use(baseRoute);
routes.use(authenticationRoutes);
routes.use(ensureAuthenticated);
// authenticated routes

export default routes;
