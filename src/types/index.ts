export interface INextPage<T = any, U = any> {
  params: T,
  searchParams: U
}

export interface IUser {
  id: number,
  name: string,
  img: string,
}

export interface IProfile {
  email: string;
}

export interface IPassword {
  id: number,
  
  name: string,
  href: string,

  username: string,  
  hasher: string,
  pass: string,
  pin: string,

  userId: number,
}

export interface IUserPayload {
  name: string,
  img: string,
  email: string,
  password: string,
}
export interface IPasswordPayload {
  name: string,
  href: string,
  password: string,
  pin: string,
}

export interface ILoginPaylod {
  username: string,
  password: string,
}

export interface IAuthRes {
  token: string;
}