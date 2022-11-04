import User from '../database/models/User';
import Token from '../auth/token';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: any) => {
    const { firstName, email } = user;

    const emailUser = await User.findOne({ where: { email } });

    if (!firstName || !emailUser) {
      return {
        status: 401,
        data: {
          message: 'Incorrect name and email',
        },
      };
    }

    const token = this.token.generate({ firstName, email });

    return {
      status: 200,
      data: {
        token,
      },
    };
  };
}