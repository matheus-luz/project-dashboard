import { Router } from 'express';
import LoginValidate from '../middlewares/login';

import LoginController from '../controllers/login';
// import Authorization from '../middlewares/authorization';

const routerLogin = Router();

const loginController = new LoginController();
// const authorization = new Authorization();
const loginValidate = new LoginValidate();

routerLogin.post(
  '/',
  loginValidate.validations,
  loginController.authentication,
);

routerLogin.get(
  '/user',
  loginController.userSucess,
);

export default routerLogin;
