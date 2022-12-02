import { IAuthRepository } from '~/domains/authentication/infra/repositories/IAuthRepository';
import { IAuthRepositoryImpl } from '~/domains/authentication/infra/repositories/implementations/IAuthRepositoryImpl';
import { ITasksRepositoryImpl } from '~/domains/tasks/infra/repositories/implementations/ITasksRepositoryImpl';
import { ITasksRepository } from '~/domains/tasks/infra/repositories/ITasksRepository';
import { container } from 'tsyringe';

container.registerSingleton<IAuthRepository>(
  'IAuthRepositoryImpl',
  IAuthRepositoryImpl
);

container.registerSingleton<ITasksRepository>(
  'ITasksRepositoryImpl',
  ITasksRepositoryImpl
);
