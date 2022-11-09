import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/Client';
import LoginService from '../service/login';

const SECRET = process.env.JWT_SECRET || 'secret';

export default class LoginController {
  private service;
  constructor() {
    this.service = new LoginService();
  }

  public authentication = async (req: Request, res: Response) => {
    const client = req.body;
    const { status, data } = await this.service.find(client);

    return res.status(status).json(data);
  };

  public userSucess = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    
    const decode = jwt.verify(token, SECRET) as jwt.JwtPayload;
    const { email } = decode;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(200).json({ id: user.id });
    }
  };
}