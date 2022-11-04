import { Request, Response } from 'express';

import ClientService from '../service/client';

export default class LoginController {
  private service;
  constructor() {
    this.service = new ClientService();
  }

  // Consultar um único cliente por ID
  public findId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await this.service.findId(id);

    return res.status(status).json(data.clientId);
  };
}