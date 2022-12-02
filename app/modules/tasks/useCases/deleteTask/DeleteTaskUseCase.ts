import { AppError } from '~/shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { IGetTaskByIdDTO } from '../../http/dtos';
import { tasksErrorsMessages } from '../../http/errors/tasksErrosMessages';
import { ITasksRepository } from '../../repositories/ITasksRepository';

@injectable()
class DeleteTaskUseCase {
  constructor(
    @inject('ITasksRepositoryImpl')
    private repository: ITasksRepository
  ) {}
  async execute({ _id }: IGetTaskByIdDTO) {
    const task = await this.repository.delete({ _id });
    if (!task) {
      throw new AppError(tasksErrorsMessages.taskNotFound, 404);
    }
    return task;
  }
}

export { DeleteTaskUseCase };
