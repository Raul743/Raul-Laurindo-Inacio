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
  async execute(props: IUpdateUsersDTO) {
    const user = await this.repository.show({
      _id: props._id,
    });
    if (!user) {
      throw new AppError(usersErrorsMessages.userNotFound, 404);
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(props.password ?? user.password, salt);

    const update = await this.repository.update({
      _id: props._id,
      username: props.username,
      email: props.email,
      password: hash,
      role: props.role,
    });

    return update;
  }
}

export { UpdateUserUseCase };
