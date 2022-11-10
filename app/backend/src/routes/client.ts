import { Router } from 'express';

import ClientController from '../controllers/client';
import ClientMiddleware from '../middlewares/client';

const routerClient = Router();

const clientController = new ClientController();
const clientMiddleware = new ClientMiddleware();

routerClient.get('/', clientController.getAll);

routerClient.get('/:id', clientController.findId);
routerClient.patch(
  '/:id', 
  clientMiddleware.validations,
  clientController.updateId,
);

export default routerClient;