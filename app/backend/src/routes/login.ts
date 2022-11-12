import { Router } from 'express';
import LoginValidate from '../middlewares/login';

import LoginController from '../controllers/login';

const routerLogin = Router();

const loginController = new LoginController();
const loginValidate = new LoginValidate();

routerLogin.post(
  '/',
  loginValidate.validations,
  loginController.authentication,
);

export default routerLogin;