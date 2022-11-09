import { NextFunction, Request, Response } from 'express';

export default class ClientUpdateValidate {
  private findAll = (
    email: string, 
    gender: string, 
    companyId: number, 
    cityId: number,
  ) => {
    if (!email || !gender || !companyId || !cityId) {
      return false;
    }
    return true;
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { email, 
      gender, 
      companyId, 
      cityId,
      titleId,
    } = req.body;

    if (!this.findAll(email, gender, companyId, cityId) || !titleId) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    
    next();
  };
}