import 'reflect-metadata';
import '~/configurations/environments';
import '~/configurations/db/mongo';
import 'express-async-errors';
import swaggerDocs from '~/documentation';
import routes from '~/infra/http/routes';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';

import '~/shared/container';
import { errors } from './http/middlewares/errors';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes);

app.use(errors);

export default app;
