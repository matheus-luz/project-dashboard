import { Request, Response } from 'express';
import LoginService from '../service/login';

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
}