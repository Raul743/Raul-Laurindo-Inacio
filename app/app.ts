import 'reflect-metadata';
import '~/configurations/environments';
import '~/configurations/db/mongo';
import 'express-async-errors';
import routes from '~/routes';
import { versions } from '~/utils/versions';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';

import '~/shared/container';
import { errors } from './middlewares/errors';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(versions.current, routes);

app.use(errors);

export default app;
