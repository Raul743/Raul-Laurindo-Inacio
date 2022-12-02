import { IAuthRepository } from '~/modules/authentication/repositories/IAuthRepository';
import { AppError } from '~/shared/errors/AppError';
import { compareDates } from '~/utils/functions';
import { inject, injectable } from 'tsyringe';

import { ICreateTaskDTO } from '../../http/dtos';
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
  async execute(props: ICreateTaskDTO) {
    const startedAt = props.startedAt.toString();
    const finishedAt = props.finishedAt.toString();

    const isValidDates = compareDates(startedAt, finishedAt);

    if (isValidDates === null) {
      throw new AppError(tasksErrorsMessages.invalidDateQuantification, 404);
    }

    const member = await this.aRepository.show({
      _id: props.members,
    });
    if (!member) {
      throw new AppError(tasksErrorsMessages.memberNotFound, 404);
    }

    const task = await this.repository.create({
      title: props.title,
      description: props.description,
      priority: props.priority,
      tags: props.tags,
      members: member.username,
      status: props.status,
      startedAt: props.startedAt,
      finishedAt: props.finishedAt,
    });
    return task;
  }
}

export { CreateTaskUseCase };
