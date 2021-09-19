export interface UserSignupDto {
  email: string;
  phone: string;
  name: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export interface UserSigninDto {
  email: string;
  password: string;
}
