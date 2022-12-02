import 'reflect-metadata';

import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import logger from 'morgan';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

export default app;
