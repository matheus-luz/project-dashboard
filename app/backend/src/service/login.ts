import User from '../database/models/User';
import Token from '../auth/token';
import { IUser } from '../types/TLogin';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: IUser) => {
    const { name, email } = user as IUser;

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