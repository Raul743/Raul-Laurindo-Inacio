import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateUsersDTO } from '../../../dtos';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(
    req: Request<any, any, ICreateUsersDTO>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const { name, email, password, role } = req.body;
    const useCase = container.resolve(CreateUserUseCase);

    const user = await useCase.execute({ name, email, password, role });

    return res
      .status(201)
      .json({ success: true, message: 'User Created', data: user });
  }
}

export { CreateUserController };
