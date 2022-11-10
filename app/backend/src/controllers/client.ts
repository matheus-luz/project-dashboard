import { Request, Response } from 'express';

import ClientService from '../service/client';

export default class ClientController {
  private service;
  constructor() {
    this.service = new ClientService();
  }

  // Clientes
  public getAll = async (_req: Request, res: Response) => {
    const { status, data } = await this.service.getAll();

    return res.status(status).json(data);
  };

  // Consultar um único cliente por ID
  public findId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await this.service.findId(id);

    return res.status(status).json(data);
  };

  // Editar um cliente por ID
  public updateId = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const { status, data } = await this.service.updateId(body, id);

    return res.status(status).json(data);
  };
}