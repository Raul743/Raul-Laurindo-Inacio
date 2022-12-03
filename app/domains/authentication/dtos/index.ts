interface ICreateUsersDTO {
  name: string;
  email: string;
  password: string;
  role: ['admin' | 'user'];
}

interface IUpdateUsersDTO {
  _id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: ['admin' | 'user'];
}

interface IUserLoginDTO {
  email: string;
  password: string;
}

interface IGetUserByEmail {
  email: string;
}

interface IGetUserDTO {
  _id: string;
}

export {
  ICreateUsersDTO,
  IUpdateUsersDTO,
  IGetUserByEmail,
  IGetUserDTO,
  IUserLoginDTO,
};
