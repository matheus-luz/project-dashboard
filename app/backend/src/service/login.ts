import Token from '../auth/token';
import { TUser } from '../types/TLogin';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: TUser) => {
    const { email, password } = user as TUser;

    const token = this.token.generate({ email, password });

    return {
      status: 200,
      data: {
        token,
      },
    };
  };
}