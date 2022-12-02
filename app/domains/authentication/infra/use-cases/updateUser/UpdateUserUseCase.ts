/* eslint-disable no-underscore-dangle */
import { AppError } from '~/shared/errors/AppError';
import bcrypt from 'bcrypt';
import { injectable, inject } from 'tsyringe';

import { IUpdateUsersDTO } from '../../../dtos';
import { usersErrorsMessages } from '../../http/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute({ _id, email, name, password, role }: IUpdateUsersDTO) {
    const user = await this.repository.show({
      _id,
    });
    if (!user) {
      throw new AppError(usersErrorsMessages.userNotFound, 404);
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password ?? user.password, salt);

    const update = await this.repository.update({
      _id,
      name,
      email,
      password: hash,
      role,
    });

    return update;
  }
}

export { UpdateUserUseCase };
