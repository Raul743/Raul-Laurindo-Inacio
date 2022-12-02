import { IAuthRepository } from '~/domains/authentication/infra/repositories/IAuthRepository';
import { AppError } from '~/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { ICreateTaskDTO } from '../../../dtos';
import { tasksErrorsMessages } from '../../http/errors/tasksErrosMessages';
import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository,
    @inject('IAuthRepositoryImpl')
    private aRepository: IAuthRepository
  ) {}
  async execute({
    description,
    finishedAt,
    members,
    priority,
    startedAt,
    status,
    tags,
    title,
  }: ICreateTaskDTO) {
    const member = await this.aRepository.show({
      _id: members,
    });
    if (!member) {
      throw new AppError(tasksErrorsMessages.memberNotFound, 404);
    }

    const task = await this.repository.create({
      title,
      description,
      priority,
      tags,
      members: member.username,
      status,
      startedAt,
      finishedAt,
    });
    return task;
  }
}

export { CreateTaskUseCase };
