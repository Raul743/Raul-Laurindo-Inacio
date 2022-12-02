import { IAuthRepository } from '~/modules/authentication/repositories/IAuthRepository';
import { IAuthRepositoryImpl } from '~/modules/authentication/repositories/implementations/IAuthRepositoryImpl';
import { ITasksRepositoryImpl } from '~/modules/tasks/repositories/implementations/ITasksRepositoryImpl';
import { ITasksRepository } from '~/modules/tasks/repositories/ITasksRepository';
import { container } from 'tsyringe';

container.registerSingleton<IAuthRepository>(
  'IAuthRepositoryImpl',
  IAuthRepositoryImpl
);

container.registerSingleton<ITasksRepository>(
  'ITasksRepositoryImpl',
  ITasksRepositoryImpl
);
