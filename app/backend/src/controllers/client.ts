import { Request, Response } from 'express';

import ClientService from '../service/client';

export default class LoginController {
  private service;
  constructor() {
    this.service = new ClientService();
  }

  // Total de clientes por cidade
  // public count = async (req: Request, res: Response) => {
  //   const { status, data } = await this.service.count();

  //   return res.status(status).json(data);
  // };

  // Clientes
  public getAll = async (req: Request, res: Response) => {
    const { status, data } = await this.service.getAll();

    return res.status(status).json(data);
  };

  // Consultar um único cliente por ID
  public findId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await this.service.findId(id);

    return res.status(status).json(data);
  };

  // Listar clientes por cidade
  public findCityToClient = async (req: Request, res: Response) => {
    const { name } = req.body;
    const { status, data } = await this.service.findCityToClient(name);

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