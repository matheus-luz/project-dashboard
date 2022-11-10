import { Request, Response } from 'express';

import CityService from '../service/city';

export default class CityController {
  private service;
  constructor() {
    this.service = new CityService();
  }

  // Cidades
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

  // Listar clientes por cidade
  public findCityToClient = async (req: Request, res: Response) => {
    const { name } = req.body;
    const { status, data } = await this.service.findCityToClient(name);
    return res.status(status).json(data);
  };
}