import {
  ICreateUsersDTO,
  IGetUserByEmail,
  IGetUserDTO,
  IUpdateUsersDTO,
} from '../http/dtos';

interface IAuthRepository {
  show({ _id }: IGetUserDTO): Promise<any | null>;
  create({
    username,
    email,
    password,
    role,
  }: ICreateUsersDTO): Promise<any | null>;
  update({
    _id,
    username,
    email,
    password,
    role,
  }: IUpdateUsersDTO): Promise<any | null>;
  getUserByEmail({ email }: IGetUserByEmail): Promise<any | null>;
}

export { IAuthRepository };
