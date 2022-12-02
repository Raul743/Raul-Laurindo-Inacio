import { AppError } from '~/shared/errors/AppError';
import bcrypt from 'bcrypt';
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
  async execute({ email, password, role, username }: ICreateUsersDTO) {
    const alreadyExistsUser = await this.repository.getUserByEmail({
      email,
    });
    if (alreadyExistsUser) {
      throw new AppError(usersErrorsMessages.userAlreadyExists, 404);
    }
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.repository.create({
      username,
      email,
      password: hash,
      role,
    });

    return user;
  }
}

export { CreateUserUseCase };
