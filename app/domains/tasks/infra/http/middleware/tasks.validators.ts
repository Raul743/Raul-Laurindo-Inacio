import { showError } from '~/infra/http/middlewares';
import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    title: yup.string().required().min(2).max(40),
    description: yup.string().required(),
    priority: yup.number().min(1).max(8).required(),
    tags: yup.array().of(yup.string()),
    members: yup.array().of(yup.string()),
  });

  await showError(req, res, next, schema);
};
