import { NextFunction, Request, Response } from 'express';

export default class LoginValidate {
  private findValidations = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!this.findValidations(email)) {
      return res.status(400).json({ message: 'email must be a valid email' });
    }

    next();
  };
}