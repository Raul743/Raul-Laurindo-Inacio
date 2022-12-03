import {
  ICreateUsersDTO,
  IGetUserByEmail,
  IGetUserDTO,
  IUpdateUsersDTO,
} from '../../dtos';

interface IAuthRepository {
  show({ _id }: IGetUserDTO): Promise<any | null>;
  create({ name, email, password, role }: ICreateUsersDTO): Promise<any | null>;
  update({
    _id,
    name,
    email,
    password,
    role,
  }: IUpdateUsersDTO): Promise<any | null>;
  getUserByEmail({ email }: IGetUserByEmail): Promise<any | null>;
}

export { IAuthRepository };
