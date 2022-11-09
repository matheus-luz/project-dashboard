import { NextFunction, Request, Response } from 'express';
import User from '../database/models/User';

export default class LoginValidate {
  private findValidations = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!this.findValidations(email)) {
      return res.status(400).json({ message: 'email must be a valid email' });
    }

    next();
  };

  public validationsBody = async (
    req: Request, 
    res: Response, 
    next: NextFunction,
  ) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user && password !== user.password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    next();
  };
}