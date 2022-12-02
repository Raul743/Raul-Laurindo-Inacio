import { User } from '~/domains/authentication/infra/entities/Users';

import {
  IGetUserDTO,
  ICreateUsersDTO,
  IUpdateUsersDTO,
  IGetUserByEmail,
} from '../../../dtos';
import { IAuthRepository } from '../IAuthRepository';

class IAuthRepositoryImpl implements IAuthRepository {
  async show({ _id }: IGetUserDTO): Promise<any | null> {
    return User.findById(_id);
  }
  async create({
    name,
    email,
    password,
    role,
  }: ICreateUsersDTO): Promise<any | null> {
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    return user;
  }
  async update({
    _id,
    name,
    email,
    password,
    role,
  }: IUpdateUsersDTO): Promise<any | null> {
    const updateUser = await User.findByIdAndUpdate(_id, {
      $set: {
        name,
        email,
        password,
        role,
      },
    });
    return updateUser;
  }
  async getUserByEmail({ email }: IGetUserByEmail): Promise<any> {
    return User.findOne({ email });
  }
}

export { IAuthRepositoryImpl };
