import User from '../database/models/User';
import Token from '../auth/token';
import { TUser } from '../types/TLogin';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: TUser) => {
    const { email, password } = user as TUser;

    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser) {
      return {
        status: 401,
        data: {
          message: 'Incorrect email',
        },
      };
    }

    const token = this.token.generate({ email, password });

    return {
      status: 200,
      data: {
        token,
      },
    };
  };
}