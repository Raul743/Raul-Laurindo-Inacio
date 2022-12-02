import { inject, injectable } from 'tsyringe';

import { IUpdateTaskDTO } from '../../../dtos';
import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository
  ) {}
  async execute({
    _id,
    description,
    finishedAt,
    members,
    priority,
    startedAt,
    status,
    tags,
    title,
  }: IUpdateTaskDTO) {
    return this.repository.update({
      // eslint-disable-next-line no-underscore-dangle
      _id,
      title,
      description,
      priority,
      tags,
      members,
      status,
      startedAt,
      finishedAt,
    });
  }
}

export { UpdateTaskUseCase };
