import { AppError } from '~/shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import { ICreateUsersDTO } from '../../../dtos';
import { usersErrorsMessages } from '../../http/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute({ email, password, role, name }: ICreateUsersDTO) {
    const alreadyExistsUser = await this.repository.getUserByEmail({
      email,
    });
    if (alreadyExistsUser) {
      throw new AppError(usersErrorsMessages.userAlreadyExists, 404);
    }

    const user = await this.repository.create({
      name,
      email,
      password,
      role,
    });

    return user;
  }
}

export { CreateUserUseCase };
