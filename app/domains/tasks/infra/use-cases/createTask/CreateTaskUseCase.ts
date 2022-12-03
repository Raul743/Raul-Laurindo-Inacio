import { IAuthRepository } from '~/domains/authentication/infra/repositories/IAuthRepository';
import { AppError } from '~/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { ICreateTaskDTO } from '../../../dtos';
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
    members?.forEach(async (members) => {
      const memberTaks = await this.aRepository.show({
        _id: members,
      });

      if (!memberTaks) {
        throw new AppError('error no id send to members');
      }
    });

    const task = await this.repository.create({
      title,
      description,
      priority,
      tags,
      members,
      status,
      startedAt,
      finishedAt,
    });
    return task;
  }
}

export { CreateTaskUseCase };
