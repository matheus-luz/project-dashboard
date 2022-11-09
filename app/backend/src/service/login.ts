import User from '../database/models/Client';
import Token from '../auth/token';
import { TUser } from '../types/TLogin';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: TUser) => {
    const { name, email } = user as TUser;

    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser) {
      return {
        status: 401,
        data: {
          message: 'Incorrect name and email',
        },
      };
    }

    const token = this.token.generate({ name, email });

    return {
      status: 200,
      data: {
        token,
      },
    };
  };
}