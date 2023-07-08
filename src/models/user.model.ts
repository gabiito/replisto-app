export interface UserInfo {
  id: string;
  name: string;
  email: string;
  image?: string;
  rol?: Roles;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  name: string;
  email: string;
  password: string;
}
