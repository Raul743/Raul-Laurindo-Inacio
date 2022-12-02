import { AppError } from '~/shared/errors/AppError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import { IUserLoginDTO } from '../../../dtos';
import { usersErrorsMessages } from '../../http/errors/usersErrorsMessages';
import { IAuthRepository } from '../../repositories/IAuthRepository';

@injectable()
class LoginUseCase {
  constructor(
    @inject('IAuthRepositoryImpl')
    private repository: IAuthRepository
  ) {}
  async execute({ email, password }: IUserLoginDTO) {
    const user = await this.repository.getUserByEmail({
      email,
    });

    if (!user) {
      throw new AppError(usersErrorsMessages.userNotFound);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new AppError(usersErrorsMessages.incorrectEmailOrPassword);
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '', {
      expiresIn: process.env.JWT_TOKEN_EXPIRE_TIME,
    });
    const { _id: id, username, role } = user;

    return {
      auth: {
        type: 'jwt',
        token,
      },
      user: {
        id,
        username,
        email,
        role,
      },
    };
  }
}

export { LoginUseCase };
