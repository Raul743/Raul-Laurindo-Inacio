import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  res.json({
    summary: 'Mamboo-Tasks-API',
    version: '1.0.0',
    status: 'Running APPLICATION',
    origin: 'Mamboo',
  });
});

export default routes;
