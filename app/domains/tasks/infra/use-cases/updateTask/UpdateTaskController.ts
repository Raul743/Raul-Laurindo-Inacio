import { IAppResponse } from '~/@types';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateTaskUseCase } from './UpdateTaskUseCase';

interface IRequestDTO {
  title?: string;
  description?: string;
  priority?: number;
  status?: 'in-backlog' | 'pending' | 'in-progress' | 'in-pr' | 'done';
  members?: string;
  tags?: string;
  startedAt?: Date;
  finishedAt?: Date;
}

class UpdateTaskController {
  async handle(
    req: Request<{ id: string }, unknown, IRequestDTO>,
    res: Response<IAppResponse<any>>
  ): Promise<Response> {
    const { id: _id } = req.params;
    const {
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    } = req.body;
    const useCase = container.resolve(UpdateTaskUseCase);

    const task = await useCase.execute({
      _id,
      title,
      description,
      priority,
      status,
      members,
      tags,
      startedAt,
      finishedAt,
    });

    return res
      .status(200)
      .json({ success: true, message: 'Task Updated', data: task });
  }
}

export { UpdateTaskController };
